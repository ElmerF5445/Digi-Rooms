const mongoose = require('mongoose');

const Accounts_Schema = new mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true},
    Access: {
        InteractiveMap: {
            View: {type: Boolean, required: true},
            Edit: {type: Boolean, required: true}
        },
        Reservation: {
            Create: {type: Boolean, required: true},
            Edit: {type: Boolean, required: true},
            Overwrite: {type: Boolean, required: true},
            Approve: {
                Initial: {type: Boolean, required: true},
                Final: {type: Boolean, required: true}
            }
        },
        Report: {
            ScheduleTimetable: {type: Boolean, required: true},
            RoomUtilization: {type: Boolean, required: true},
            MapOverview: {type: Boolean, required: true},
            ReservationSlip: {type: Boolean, required: true},
            AccountList: {type: Boolean, required: true},
            ActivityLog: {type: Boolean, required: true}
        }
    },
    Approval: {
        State: {type: String, required: true},
        ApproverID: {type: String, required: true},
        DateApproved: {type: Date, required: true},
        Reason: {type: String, required: true}
    }
    
});

module.exports = mongoose.model('Accounts', Accounts_Schema);