const express = require('express');
const router = express.Router();
const Accounts = require('../models/Accounts');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create registration request
router.post('/Register', async (req, res) => {
  try {
    const {
      Name,
      Email,
      Password
    } = req.body;

    const Account_Existing = await Accounts.findOne({ Email });
    if (Account_Existing) {
      return res.status(400).json({ message: "Email account already exists." });
    }

    const Account_Password_Hashed = await bcrypt.hash(Password, 10);

    const Account_New_Data = new Accounts({
      Name,
      Email,
      Password: Account_Password_Hashed,
      Access: {
        InteractiveMap: {
          View: false,
          Edit: false
        },
        Reservation: {
          Create: false,
          Edit: false,
          Overwrite: false,
          Approve: {
            Initial: false,
            Final: false
          }
        },
        Report: {
          ScheduleTimetable: false,
          RoomUtilization: false,
          MapOverview: false,
          ReservationSlip: false,
          AccountList: false,
          ActivityLog: false
        }
      },
      Approval: {
        State: "Pending",
        ApproverID: "Awaiting",
        DateApproved: new Date(),
        Reason: "-"
      }
    });

    await Account_New_Data.save();
    res.status(201).json({message: "Registration request created."});
  } catch (Error) {
    res.status(500).json({ message: Error.message });
  }
});

// Login
router.post('/Login', async (req, res) => {
  try{
    const {
      Email,
      Password
    } = req.body;

    const Account_Existing = await Accounts.findOne({Email});
    if (!Account_Existing){
      return res.status(401).json({message: "Account doesn't exist."});
    }

    const Account_Password_Match = await bcrypt.compare(Password, Account_Existing.Password);
    if (!Account_Password_Match){
      return res.status(401).json({message: "Password doesn't match."});
    }

    if (Account_Existing.Approval.State != "Approved"){
      return res.status(403).json({message: "Account not approved yet."});
    }

    const Token = jwt.sign({id: Account_Existing._id}, "DR_Secret", {expiresIn: "1h"});
    res.json({Token, Account_Existing});
  } catch (Error) {
    res.status(500).json({message: Error.message});
  }
});

// Get account data
router.get('/Profile', async (req, res) => {
  try{
    const Token = req.headers.authorization?.split(' ')[1];
    if (!Token){
      return res.status(401).json({message: "No token detected."});
    }

    const Token_Decoded = jwt.verify(Token, "DR_Secret");
    const Account_Details = await Accounts.findById(Token_Decoded.id).select("-Password");
    if (!Account_Details){
      return res.status(404).json({message: "Account not found."});
    }
    res.json(Account_Details);
  } catch (Error) {
    res.status(401).json({message: "Invalid or expired token."});
  }
});

module.exports = router;