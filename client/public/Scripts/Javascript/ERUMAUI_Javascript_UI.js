function Panels_Toggle(Side){
	if(Element_Attribute_Get(`Panel_${Side}`, "State") == null || Element_Attribute_Get(`Panel_${Side}`, "State") == "Expanded"){
		Element_Attribute_Set(`Panel_${Side}`, "State", "Collapsed");
		Element_Attribute_Set(`Panel_Toggle_${Side}`, "State", "Collapsed");
		Element_Attribute_Set(`Panel_Toggle_${Side}_Text`, "State", "Collapsed");
	} else {
		Element_Attribute_Set(`Panel_${Side}`, "State", "Expanded");
		Element_Attribute_Set(`Panel_Toggle_${Side}`, "State", "Expanded");
		Element_Attribute_Set(`Panel_Toggle_${Side}_Text`, "State", "Expanded");
	}
}

function Navigation_Toggle(){
	if(Element_Attribute_Get(`Navigation`, "State") == null || Element_Attribute_Get(`Navigation`, "State") == "Collapsed"){
		Element_Attribute_Set(`Navigation`, "State", "Expanded");
		Element_Attribute_Set(`Panels`, "State_Navigation", "Expanded");
		Element_Attribute_Set(`Panel_Toggle_Left`, "State_Navigation", "Expanded");
	} else {
		Element_Attribute_Set(`Navigation`, "State", "Collapsed");
		Element_Attribute_Set(`Panels`, "State_Navigation", "Collapsed");Element_Attribute_Set(`Panel_Toggle_Left`, "State_Navigation", "Collapsed");
	}
}

function Navigation_Navigate(ID){
	var ID_Panel_Left = Element_Attribute_Get(ID, "Target_Panel_Left");
	var ID_Panel_Center = Element_Attribute_Get(ID, "Target_Panel_Center");
	var ID_Panel_Right = Element_Attribute_Get(ID, "Target_Panel_Right");
	var ID_Ribbon = Element_Attribute_Get(ID, "Target_Ribbon");
	var Title_Header = Element_Attribute_Get(ID, "Title_Header");
	var Title_Panel_Left = Element_Attribute_Get(ID, "Title_Panel_Left");
	var Title_Panel_Right = Element_Attribute_Get(ID, "Title_Panel_Right");
	var Enable_Panel_Left = Element_Attribute_Get(ID, "Enable_Panel_Left");
	var Enable_Panel_Right = Element_Attribute_Get(ID, "Enable_Panel_Right");
	var State_Panel_Left = Element_Attribute_Get(ID, "State_Panel_Left");
	var State_Panel_Right = Element_Attribute_Get(ID, "State_Panel_Left");
	var Width_Expanded_Panel_Left = Element_Attribute_Get(ID, "Width_Expanded_Panel_Left");
	var Width_Collapsed_Panel_Left = Element_Attribute_Get(ID, "Width_Collapsed_Panel_Left");
	var Width_Expanded_Panel_Right = Element_Attribute_Get(ID, "Width_Expanded_Panel_Right");
	var Width_Collapsed_Panel_Right = Element_Attribute_Get(ID, "Width_Collapsed_Panel_Right");
	for (a = 0; a <= Element_Get_ByQuery_All(".Navigation_Button").length - 1; a++){
		Element_Get_ByQuery_All(".Navigation_Button")[a].setAttribute("State", "Inactive");
	}
	for (a = 0; a <= Element_Get_ByQuery_All(".Panel_Component").length - 1; a++){
		Element_Get_ByQuery_All(".Panel_Component")[a].setAttribute("State", "Inactive");
	}
	for (a = 0; a <= Element_Get_ByQuery_All(".Ribbon_Section").length - 1; a++){
		Element_Get_ByQuery_All(".Ribbon_Section")[a].setAttribute("State", "Inactive");
	}
	Element_InnerHTML_Set("Header_Title", Title_Header);
	Element_Attribute_Set(ID, "State", "Active");
	Element_Attribute_Set(ID_Panel_Left, "State", "Active");
	Element_Attribute_Set(ID_Panel_Center, "State", "Active");
	Element_Attribute_Set(ID_Panel_Right, "State", "Active");
	Element_Attribute_Set(ID_Ribbon, "State", "Active");
	if (Enable_Panel_Left == "true"){
		Page_Properties.Panels.Left.Enabled = true;
		Page_Properties.Panels.Left.State = State_Panel_Left;
		Page_Properties.Panels.Left.Width.Expanded = Width_Expanded_Panel_Left;
		Page_Properties.Panels.Left.Width.Collapsed = Width_Collapsed_Panel_Left;
	} else {
		Page_Properties.Panels.Left.Enabled = false;
	}
	if (Enable_Panel_Right == "true"){
		Page_Properties.Panels.Right.Enabled = true;
		Page_Properties.Panels.Right.State = State_Panel_Right;
		Page_Properties.Panels.Right.Width.Expanded = Width_Expanded_Panel_Right;
		Page_Properties.Panels.Right.Width.Collapsed = Width_Collapsed_Panel_Right;
	} else {
		Page_Properties.Panels.Right.Enabled = false;
	}
	Page_Properties.Panels.Left.Title = Title_Panel_Left;
	Page_Properties.Panels.Right.Title = Title_Panel_Right;
	Initial_Properties_Set("Update");
}

function LoadingScreen_Hide(){
    // Element_Opacity_Set("LoadingScreen", 0);
    Element_Attribute_Set("Screen_Loading", "State", "Inactive");
}

function LoadingScreen_Show(){
    // Element_Opacity_Set("LoadingScreen", 100);
	Element_Attribute_Set("Screen_Loading", "State", "Active");
}

function Header_Toggle_PageNavigation(){
    if (Element_Attribute_Get("Header_PageNavigation_Menu", "State") == "Inactive"){
        // Element_Style_Display("Header_PageNavigation_Menu", "grid");
		Element_Attribute_Set("Header_PageNavigation_Menu", "State", "Active");
        Element_Style_Animate("Header_PageNavigation_Menu", "Overlays_Menu_Open", "0.3s", "forwards");
		Element_Style_Animate_Batch_QuerySelector(".Header_PageNavigation_Menu_Content", "Overlays_Menu_Content_Open", "0.3s", "forwards", "1", 50);
		Element_Style_Animate_Batch_QuerySelector(".Header_PageNavigation_Menu_Button_Item", "Overlays_Menu_Content_Open", "0.3s", "forwards", "1", 50);
    } else if (Element_Attribute_Get("Header_PageNavigation_Menu", "State") == "Active"){
        Element_Style_Animate("Header_PageNavigation_Menu", "Overlays_Menu_Close", "0.3s", "forwards");
		// Element_Attribute_Set("Header_PageNavigation_Menu", "State", "Inactive");
		Element_Style_Animate_Batch_QuerySelector(".Header_PageNavigation_Menu_Content", "Overlays_Menu_Content_Close", "0.3s", "forwards", "1", 0);
        setTimeout(function(){Element_Attribute_Set("Header_PageNavigation_Menu", "State", "Inactive");}, 300);
    }
}

function Header_Toggle_StatusTray(){
    if (Element_Attribute_Get("Header_StatusTray_Menu", "State") == "Inactive"){
        // Element_Style_Display("Header_StatusTray_Menu", "grid");
		Element_Attribute_Set("Header_StatusTray_Menu", "State", "Active");
        Element_Style_Animate("Header_StatusTray_Menu", "Overlays_Menu_Open", "0.3s", "forwards");
		Element_Style_Animate_Batch_QuerySelector(".Header_StatusTray_Menu_Content", "Overlays_Menu_Content_Open", "0.3s", "forwards", "1", 50);
		Element_Style_Animate_Batch_QuerySelector(".Header_PageNavigation_Menu_Button_Item", "Overlays_Menu_Content_Open", "0.3s", "forwards", "1", 50);
    } else if (Element_Attribute_Get("Header_StatusTray_Menu", "State") == "Active"){
        Element_Style_Animate("Header_StatusTray_Menu", "Overlays_Menu_Close", "0.3s", "forwards");
		Element_Style_Animate_Batch_QuerySelector(".Header_StatusTray_Menu_Content", "Overlays_Menu_Content_Close", "0.3s", "forwards", "1", 0);
        setTimeout(function(){Element_Attribute_Set("Header_StatusTray_Menu", "State", "Inactive");}, 300);
    }
}

function ClockScreen_Toggle(){
	if (Element_Attribute_Get("ClockScreen", "State") == "Inactive"){
		Element_Attribute_Set("ClockScreen", "State", "Active");
		Element_Style_Display("ClockScreen", "grid");
		Element_Style_Animate("ClockScreen", "ClockScreen_Open", "0.5s", "forwards");
	} else if (Element_Attribute_Get("ClockScreen", "State") == "Active"){
		Element_Attribute_Set("ClockScreen", "State", "Inactive");
		Element_Style_Animate("ClockScreen", "ClockScreen_Close", "0.5s", "forwards");
		setTimeout(function() {
			Element_Style_Display("ClockScreen", "none");
		}, 500);
	}
}

function Sidebar_Toggle(){
    var Sidebar_State = Element_Attribute_Get("Sidebar", "State");
	if (Sidebar_State == "Collapsed" || Sidebar_State == "Collapsed_Hide"){
        Element_Attribute_Set("Sidebar", "State", "Expanded");
		if (App_Property.Sidebar.PushContentWhenExpanded == true){
			Element_Attribute_Set("MainContent_Container", "Style_PusherActive", "Active");
			Element_Attribute_Set("MainContent_Container_Pusher", "State", "Active");
		}
	} else if (Sidebar_State == "Expanded"){
		Element_Attribute_Set("Sidebar", "State", "Collapsed");
		if (App_Property.Sidebar.HideWhenCollapsed == true){
			Element_Attribute_Set("Sidebar", "State", "Collapsed_Hide");
		}
		if (App_Property.Sidebar.PushContentWhenExpanded == true){
			Element_Attribute_Remove("MainContent_Container", "Style_PusherActive");
			Element_Attribute_Remove("MainContent_Container_Pusher", "State");
		}
	}
}


var pageProperty_enableRibbon;

function Tabs_DisplayFirstPage(){
	Tabs_ChangeTab_Specific(0, "Sidebar");
}


var Tabs_Direction_Target_SelectorContainer;
var Tabs_Direction_Target_SelectorContainer_Children;
var Tabs_Direction_Target_SelectorContainer_Children_Clickable = [];
var Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected;
var Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element;

function Tabs_ChangeTab_Specific(TabIndex, TargetSelector){
	Tabs_Direction_Target_SelectorContainer_Children_Clickable = [];
	Tabs_Direction_Target_SelectorContainer = document.getElementById(TargetSelector);
	Tabs_Direction_Target_SelectorContainer_Children = Tabs_Direction_Target_SelectorContainer.children;
	for (a = 0; a < Tabs_Direction_Target_SelectorContainer_Children.length; a++){
		if (Tabs_Direction_Target_SelectorContainer_Children[a].getAttribute("onclick") != null){
			Tabs_Direction_Target_SelectorContainer_Children_Clickable.push(Tabs_Direction_Target_SelectorContainer_Children[a]);
		}
	}
	Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element = Tabs_Direction_Target_SelectorContainer_Children_Clickable[TabIndex];
	Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element.click();

}

function Tabs_ChangeTab_Direction(Direction, TargetSelector){
	Tabs_Direction_Target_SelectorContainer_Children_Clickable = [];
	Tabs_Direction_Target_SelectorContainer = document.getElementById(TargetSelector);
	Tabs_Direction_Target_SelectorContainer_Children = Tabs_Direction_Target_SelectorContainer.children;
	for (a = 0; a < Tabs_Direction_Target_SelectorContainer_Children.length; a++){
		if (Tabs_Direction_Target_SelectorContainer_Children[a].getAttribute("onclick") != null){
			Tabs_Direction_Target_SelectorContainer_Children_Clickable.push(Tabs_Direction_Target_SelectorContainer_Children[a]);
		}
	}
	for (a = 0; a < Tabs_Direction_Target_SelectorContainer_Children_Clickable.length; a++){
		if (Tabs_Direction_Target_SelectorContainer_Children_Clickable[a].hasAttribute("State")){
			Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected = Tabs_Direction_Target_SelectorContainer_Children_Clickable.indexOf(Tabs_Direction_Target_SelectorContainer_Children_Clickable[a]);
			break;
		}
	}
	if (Direction == "Forwards"){
		Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element = Tabs_Direction_Target_SelectorContainer_Children_Clickable[(Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected + 1) % Tabs_Direction_Target_SelectorContainer_Children_Clickable.length];

		Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element.click();

	} else if (Direction == "Backwards") {
		Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element = Tabs_Direction_Target_SelectorContainer_Children_Clickable[(Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected - 1 + Tabs_Direction_Target_SelectorContainer_Children_Clickable.length) % Tabs_Direction_Target_SelectorContainer_Children_Clickable.length];

		Tabs_Direction_Target_SelectorContainer_Children_Clickable_Selected_Element.click();

	}
	
}

var Tabs_Button_ID;
var Tabs_Button_TabTitle;
var Tabs_Button_Target_Container;
var Tabs_Button_Target_Tab;
var Tabs_Button_Parent;

var Tabs_Target_Container;
var Tabs_Target_Container_CurrentTab;
var Tabs_Target_Container_TabList = [];
var Tabs_Target_Container_TabList_ID = [];
var Tabs_Target_Container_TabList_ID_Index_CurrentTab;
var Tabs_Target_Container_TabList_ID_Index_TargetTab;
var Tabs_MainView_OriginalState;
var Tabs_Transition_Lock = false;
function Tabs_ChangeTab_Depracated(ButtonID, Layout){
	console.log("Lock is " + Tabs_Transition_Lock);
	if (Tabs_Transition_Lock == true){
		console.warn("Tab switch failed; Transition still in progress. Please wait for the transition to finish.");
		Tabs_Button_Target_Container = document.getElementById(document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Target_Container"));
		Tabs_AnimationFinishCheck(Tabs_Button_Target_Container);
	} else if (Tabs_Transition_Lock == false) {
		Tabs_Transition_Lock = true;
		Tabs_Target_Container_TabList = [];
		Tabs_Target_Container_TabList_ID = [];
		/* Button properties */
		Tabs_Button_ID = ButtonID;
		Tabs_Button_TabTitle = document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Title");
		Tabs_Button_Target_Container = document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Target_Container");
		Tabs_Button_Target_Tab = document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Target_Tab");
		Tabs_Button_Parent = document.getElementById(Tabs_Button_ID).parentNode;

		/* Target container properties */
		Tabs_Target_Container = document.getElementById(Tabs_Button_Target_Container);
		Tabs_Target_Container_CurrentTab = Tabs_Target_Container.getAttribute("Tabs_CurrentTab");
		Tabs_Target_Container_TabList = Array.from(Tabs_Target_Container.children);
		for (a = 0; a < Tabs_Target_Container_TabList.length; a++){
			Tabs_Target_Container_TabList_ID[a] = Tabs_Target_Container_TabList[a].getAttribute("id");
		}
		if (Tabs_Target_Container_CurrentTab == ""){
			Tabs_Target_Container_CurrentTab = Tabs_Target_Container_TabList_ID[0];
			for (a = 1; a < Tabs_Target_Container_TabList_ID.length; a++){
				// document.getElementById(Tabs_Target_Container_TabList_ID[a]).style.visibility = "hidden";
				//document.getElementById(Tabs_Target_Container_TabList_ID[a]).style.display = "none";
				document.getElementById(Tabs_Target_Container_TabList_ID[a]).setAttribute("State", "Inactive");
			}
		}

		/* Selector buttons state */
		// Resets State value for each item in the selection container
		for (a = 0; a < Tabs_Button_Parent.children.length; a++){
			Tabs_Button_Parent.children[a].removeAttribute("State");
		}
		// Makes the clicked button the active item in the selection container
		document.getElementById(Tabs_Button_ID).setAttribute("State", "Selected");

		/* Tab switching */
		Tabs_Target_Container_TabList_ID_Index_CurrentTab = Tabs_Target_Container_TabList_ID.indexOf(Tabs_Target_Container_CurrentTab);
		Tabs_Target_Container_TabList_ID_Index_TargetTab = Tabs_Target_Container_TabList_ID.indexOf(Tabs_Button_Target_Tab);
		if (Tabs_Button_Target_Tab != Tabs_Target_Container_CurrentTab){
			/*document.getElementById(Tabs_Button_Target_Tab).style.display = "block";
			document.getElementById(Tabs_Button_Target_Tab).style.opacity = "0%";*/
			
			document.getElementById(Tabs_Button_Target_Tab).setAttribute("State", "Preparing");
			if (Tabs_Target_Container_TabList_ID_Index_TargetTab < Tabs_Target_Container_TabList_ID_Index_CurrentTab){
				// If the target tab is less than / on the left side of the current tab
				if (Layout == "Vertical"){
					document.getElementById(Tabs_Button_Target_Tab).setAttribute("Tabs_Transition", "NewTab_Upwards");
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("Tabs_Transition", "CurrentTab_Upwards");
				} else if (Layout == "Horizontal"){
					document.getElementById(Tabs_Button_Target_Tab).setAttribute("Tabs_Transition", "NewTab_Left");
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("Tabs_Transition", "CurrentTab_Left");
				}
			} else if (Tabs_Target_Container_TabList_ID_Index_TargetTab > Tabs_Target_Container_TabList_ID_Index_CurrentTab){
				// If the target tab is greater than / on the right side of the current tab
				if (Layout == "Vertical"){
					document.getElementById(Tabs_Button_Target_Tab).setAttribute("Tabs_Transition", "NewTab_Downwards");
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("Tabs_Transition", "CurrentTab_Downwards");
				} else if (Layout == "Horizontal"){
					document.getElementById(Tabs_Button_Target_Tab).setAttribute("Tabs_Transition", "NewTab_Right");
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("Tabs_Transition", "CurrentTab_Right");
				}
			}
			Tabs_Transition_OvertimeReset(document.getElementById(Tabs_Target_Container_CurrentTab));
			document.getElementById(Tabs_Target_Container_CurrentTab).addEventListener("animationend", function handler(){
				Tabs_Transition_Lock = false;
				console.log("Transition ended");
				// document.getElementById(Tabs_Target_Container_CurrentTab).onanimationend = null;
				document.getElementById(Tabs_Target_Container_CurrentTab).removeEventListener("animationend", handler); // Remove listener
				for (a = 0; a < Tabs_Target_Container_TabList_ID.length; a++){
					document.getElementById(Tabs_Target_Container_TabList_ID[a]).removeAttribute("Tabs_Transition");
					// document.getElementById(Tabs_Target_Container_CurrentTab).style.display = "none";
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("State", "Inactive");
				}
				
				// document.getElementById(Tabs_Button_Target_Tab).style.opacity = "100%";
				document.getElementById(Tabs_Button_Target_Tab).setAttribute("State", "Active");
				if (Tabs_Target_Container_CurrentTab != Tabs_Button_Target_Tab){
					// document.getElementById(Tabs_Target_Container_CurrentTab).style.display = "none";
					document.getElementById(Tabs_Target_Container_CurrentTab).setAttribute("State", "Inactive");
				}
			});
			
		}
		if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseRibbon") == "true"){
			var Tabs_Tab_Target_Ribbon = document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Target_Ribbon");
			var Tabs_Tab_Target_Ribbon_Parent = Array.from(document.getElementById(Tabs_Tab_Target_Ribbon).parentNode.children);
			for (a = 0; a < Tabs_Tab_Target_Ribbon_Parent.length; a++){
				Tabs_Tab_Target_Ribbon_Parent[a].setAttribute("style", "display: none;");
			}
			document.getElementById(Tabs_Tab_Target_Ribbon).style.display = "flex";
			Ribbon_Toggle("Enable");
		} else if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseRibbon") == "hide"){
			Ribbon_Toggle("Disable");
		}
		if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseHeaderTitle") == "true"){
			document.getElementById("pageElement_Header_Title").innerHTML = Tabs_Button_TabTitle;
		}
		if (App_Property != null || App_Property != undefined){
			if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == null){
				
			} else if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == "true"){
				App_Property.Page.MainView.UseFullContainer = true;
				Startup_Page_ApplyConfigurations("QuickChange", "ContainerOnly");
			} else if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == "false"){
				App_Property.Page.MainView.UseFullContainer = false;
				Startup_Page_ApplyConfigurations("QuickChange", "ContainerOnly");
			}
			
		}
		
		Tabs_Target_Container.setAttribute("Tabs_CurrentTab", Tabs_Button_Target_Tab);
	}
	
}

function Tabs_ChangeTab(ButtonID, Layout){
	
	// console.log("Lock is " + Tabs_Transition_Lock);
	// if (Tabs_Transition_Lock == "") {
	// 	console.warn("Tab switch failed.");
	// 	Tabs_Target_Container = Element_Attribute_Get(ButtonID, "Tabs_Tab_Target_Container");
	// 	Tabs_AnimationFinishCheck(Element_Get_ByID(Tabs_Target_Container));
	// } else if (Tabs_Transition_Lock == true) {

		
		/* Get the selector button properties */
		Tabs_Button_ID = ButtonID;
		Tabs_Button_TabTitle = Element_Attribute_Get(Tabs_Button_ID, "Tabs_Tab_Title");
		Tabs_Button_Target_Container = Element_Attribute_Get(Tabs_Button_ID, "Tabs_Tab_Target_Container");
		Tabs_Button_Target_Tab = Element_Attribute_Get(Tabs_Button_ID, "Tabs_Tab_Target_Tab");
		Tabs_Button_Parent = Element_Get_ByID(Tabs_Button_ID).parentNode;

		/* Target container properties */
		Tabs_Target_Container = Element_Get_ByID(Tabs_Button_Target_Container);
		Tabs_Target_Container_CurrentTab = Element_Attribute_Get(Tabs_Button_Target_Container, "Tabs_CurrentTab");
		// Saves all elements inside the target container
		Tabs_Target_Container_TabList = Array.from(Tabs_Target_Container.children);
		// Iterates through the elements and stores their id
		for (a = 0; a < Tabs_Target_Container_TabList.length; a++){
			Tabs_Target_Container_TabList_ID[a] = Tabs_Target_Container_TabList[a].getAttribute("id");
		}
		// If the current tab property of the target container is blank or null, hide all elements
		if (Tabs_Target_Container_CurrentTab == ""){
			Tabs_Target_Container_CurrentTab = Tabs_Target_Container_TabList_ID[0];
			Element_Attribute_Set(Tabs_Target_Container_TabList_ID[0], "State", "Active");
			for (a = 1; a < Tabs_Target_Container_TabList_ID.length; a++){
				Element_Attribute_Set(Tabs_Target_Container_TabList_ID[a], "State", "Inactive");
			}
		}

		/* Change selector button states */
		for (a = 0; a < Tabs_Button_Parent.children.length; a++){
			Tabs_Button_Parent.children[a].removeAttribute("State");
		}
		// Makes the clicked button the active item in the selection container
		Element_Attribute_Set(Tabs_Button_ID, "State", "Selected");

		/* Tab switching */
		// Index of the currently open tab in the container property
		Tabs_Target_Container_TabList_ID_Index_CurrentTab = Tabs_Target_Container_TabList_ID.indexOf(Tabs_Target_Container_CurrentTab);
		// Index of the target tab in the selector button property.
		Tabs_Target_Container_TabList_ID_Index_TargetTab = Tabs_Target_Container_TabList_ID.indexOf(Tabs_Button_Target_Tab);
		// console.log(Tabs_Target_Container_TabList_ID_Index_CurrentTab + " --> " + Tabs_Target_Container_TabList_ID_Index_TargetTab);
		if (Tabs_Button_Target_Tab != Tabs_Target_Container_CurrentTab){
			// Checks if there are other active tabs other than the currently active tab and disables them
			for (a = 0; a < Tabs_Target_Container_TabList_ID.length; a++){
				if (a != Tabs_Target_Container_TabList_ID_Index_CurrentTab || a != Tabs_Target_Container_TabList_ID_Index_TargetTab){
					// console.log("Checking activity... [" + a + "]");
					if (Element_Attribute_Get(Tabs_Target_Container_TabList_ID[a], "State") == "Active"){
						Element_Attribute_Set(Tabs_Target_Container_TabList_ID[a], "State", "Inactive");
						// console.log("State reset to inactive");
					}
					// console.log("Checking listening... [" + a + "]");
					// if (Element_Attribute_Get(Tabs_Target_Container_TabList_ID[a], "HasListener_AnimationEnd") == "True"){
					if (Element_Get_ByID(Tabs_Target_Container_TabList_ID[a]).Handler){
						// Element_Attribute_Remove(Tabs_Target_Container_CurrentTab, "HasListener_AnimationEnd");
						Element_Get_ByID(Tabs_Target_Container_TabList_ID[a]).removeEventListener("animationend", Handler);
						delete Element_Get_ByID(Tabs_Target_Container_TabList_ID[a]).Handler;
						// console.log("State handler reset");
					}
				}
			}
			// Sets the new target tab to preparing state
			Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "State", "Preparing");
			Element_Attribute_Set(Tabs_Button_Target_Tab, "State", "Preparing");
			// Play animation
			if (Tabs_Target_Container_TabList_ID_Index_TargetTab < Tabs_Target_Container_TabList_ID_Index_CurrentTab){
				// If the target tab is less than / on the left side of the current tab
				if (Layout == "Vertical"){
					Element_Attribute_Set(Tabs_Button_Target_Tab, "Tabs_Transition", "NewTab_Upwards");
					Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "Tabs_Transition", "CurrentTab_Upwards");
				} else if (Layout == "Horizontal"){
					Element_Attribute_Set(Tabs_Button_Target_Tab, "Tabs_Transition", "NewTab_Left");
					Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "Tabs_Transition", "CurrentTab_Left");
				}
			} else if (Tabs_Target_Container_TabList_ID_Index_TargetTab > Tabs_Target_Container_TabList_ID_Index_CurrentTab){
				// If the target tab is greater than / on the right side of the current tab
				if (Layout == "Vertical"){
					Element_Attribute_Set(Tabs_Button_Target_Tab, "Tabs_Transition", "NewTab_Downwards");
					Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "Tabs_Transition", "CurrentTab_Downwards");
				} else if (Layout == "Horizontal"){
					Element_Attribute_Set(Tabs_Button_Target_Tab, "Tabs_Transition", "NewTab_Right");
					Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "Tabs_Transition", "CurrentTab_Right");
				}
			}
			// Creates a timer with the duration of the transition animation as a fallback if the lock doesn't reset
			// // Tabs_Transition_OvertimeReset(Element_Get_ByID(Tabs_Target_Container_CurrentTab));
			// Once the transition animation ends, the lock resets and other properties are removed
			// Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "HasListener_AnimationEnd", "True");
			var Handler = function(event){
				Tabs_Transition_Lock = false;
				// console.log("Transition ended");
				event.target.removeEventListener("animationend", Handler); // Remove listener
				// Element_Attribute_Remove(Tabs_Target_Container_CurrentTab, "HasListener_AnimationEnd");
				for (a = 0; a < Tabs_Target_Container_TabList_ID.length; a++){
					Element_Attribute_Remove(Tabs_Target_Container_TabList_ID[a], "Tabs_Transition");
					if (Element_Attribute_Get(Tabs_Target_Container_TabList_ID[a], "State") == "Preparing" && Element_Attribute_Get(Tabs_Target_Container_TabList_ID[a], "State") != "Active"){
						Element_Attribute_Set(Tabs_Target_Container_TabList_ID[a], "State", "Inactive");
					}
				}
				Element_Attribute_Set(Tabs_Button_Target_Tab, "State", "Active");
				if (Tabs_Target_Container_CurrentTab != Tabs_Button_Target_Tab){
					Element_Attribute_Set(Tabs_Target_Container_CurrentTab, "State", "Inactive");
				}
			}
			document.getElementById(Tabs_Target_Container_CurrentTab).addEventListener("animationend", Handler);
			document.getElementById(Tabs_Target_Container_CurrentTab).Handler = Handler;
		}
		/* Additional functions */
		if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseRibbon") == "true"){
			var Tabs_Tab_Target_Ribbon = document.getElementById(Tabs_Button_ID).getAttribute("Tabs_Tab_Target_Ribbon");
			var Tabs_Tab_Target_Ribbon_Parent = Array.from(document.getElementById(Tabs_Tab_Target_Ribbon).parentNode.children);
			for (a = 0; a < Tabs_Tab_Target_Ribbon_Parent.length; a++){
				Tabs_Tab_Target_Ribbon_Parent[a].setAttribute("style", "display: none;");
			}
			document.getElementById(Tabs_Tab_Target_Ribbon).style.display = "flex";
			Ribbon_Toggle("Enable");
		} else if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseRibbon") == "hide"){
			Ribbon_Toggle("Disable");
		}
		if (document.getElementById(Tabs_Button_ID).getAttribute("Tabs_UseHeaderTitle") == "true"){
			document.getElementById("pageElement_Header_Title").innerHTML = Tabs_Button_TabTitle;
		}
		if (App_Property != null || App_Property != undefined){
			if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == null){
				
			} else if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == "true"){
				App_Property.Page.MainView.UseFullContainer = true;
				Startup_Page_ApplyConfigurations("QuickChange", "ContainerOnly");
			} else if (Element_Attribute_Get(Tabs_Button_ID, "Tabs_UseFullContainer") == "false"){
				App_Property.Page.MainView.UseFullContainer = false;
				Startup_Page_ApplyConfigurations("QuickChange", "ContainerOnly");
			}
			
		}

		Tabs_Target_Container.setAttribute("Tabs_CurrentTab", Tabs_Button_Target_Tab);

}


var Tabs_ComputedDuration = 400;
function Tabs_Transition_OvertimeReset(Element){
	Tabs_ComputedDuration = (parseFloat(window.getComputedStyle(Element).animationDuration || 0) + parseFloat(window.getComputedStyle(Element).animationDelay || 0)) * 1000;
	// console.log("Computed duration: " + Tabs_ComputedDuration);

	setTimeout(function() {
		if(Tabs_Transition_Lock == true){
			// console.error("Lock reset");
			Tabs_Transition_Lock = false;
		}	
	}, Tabs_ComputedDuration);
}

function Tabs_AnimationFinishCheck(Target_Container){
	var Occurence_Count = 0;
	for(a = 0; a < Target_Container.children.length; a++){
		if (Target_Container.children[a].getAttribute("Tabs_Transition") != null ){
			Occurence_Count++;
		}
	}
	if (Occurence_Count == 0 && Tabs_Transition_Lock == true){
		Tabs_Transition_Lock = false;
		// console.error("Lock reset due to lack of transition attribute");
	}
}

function Ribbon_Toggle(State){
	if (State == "Enable"){
		if (pageProperty_enableRibbon == 1){
            Element_Attribute_Set("MainContent", "Style_Margin_Ribbon", "Enabled");
            Element_Style_Display("Ribbon", "flex");
			// document.getElementById("pageElement_Content").style.height = "calc(100% - 80px)";
			// document.getElementById("pageElement_Content").style.marginTop = "85px";
			// document.getElementById("pageElement_Ribbon").style.display = "flex";
			// if (pageProperty_lockSidebar == 1){
			// 	document.getElementById("pageElement_Ribbon").style.marginLeft = "0px";
			// 	document.getElementById("pageElement_Ribbon").style.width = "100%";
			// }
		} else {
            Element_Attribute_Set("MainContent", "Style_Margin_Ribbon", "Disabled");
			// document.getElementById("pageElement_Content").style.height = "calc(100% - 50px)";
			// document.getElementById("pageElement_Content").style.marginTop = "50px";
		}
	} else if (State == "Disable"){
        Element_Attribute_Set("MainContent", "Style_Margin_Ribbon", "Disabled");
        Element_Style_Display("Ribbon", "none");
		// document.getElementById("pageElement_Ribbon").style.display = "none";
		// document.getElementById("pageElement_Content").style.height = "calc(100% - 50px)";
		// document.getElementById("pageElement_Content").style.marginTop = "50px";
	}
}

function Accordion_Toggle(ID){
    var Accordion_State = Element_Attribute_Get(ID, "State");
    if (Accordion_State == "Collapsed"){
        Element_Attribute_Set(ID, "State", "Expanded");
    } else if (Accordion_State == "Expanded" || Accordion_State == null){
        Element_Attribute_Set(ID, "State", "Collapsed");
    }
}

var Dropdown;
var Dropdown_State;
var Dropdown_List_Items;
function Dropdown_ToggleList(ID){
	Dropdown_State = Element_Attribute_Get(ID, "State");
	Dropdown_List_Items = document.getElementById(ID).querySelectorAll(".Dropdown_List_Item");

	if (Dropdown_State == "Inactive" || Dropdown_State == null){
		document.getElementById(ID).querySelector(".Dropdown_Button").focus();
		Element_Attribute_Set(ID, "State", "Active");
		for (a = 0; a < Dropdown_List_Items.length; a++){
			Dropdown_List_Items[a].removeAttribute("disabled");
		}
	} else if (Dropdown_State == "Active"){
		document.getElementById(ID).querySelector(".Dropdown_Button").focus();
		Element_Attribute_Set(ID, "State", "Inactive");
		for (a = 0; a < Dropdown_List_Items.length; a++){
			Dropdown_List_Items[a].setAttribute("disabled", "");
		}
	}

}

var Dropdown_TargetButton;
function Dropdown_SubmitValue(ParentNodeID, InnerText){
	document.getElementById(ParentNodeID).querySelector(".Dropdown_Button_Text").innerText = InnerText;
	document.getElementById(ParentNodeID).querySelector(".Dropdown_Button").click();
}

function Buttons_Toggle(ID){
	var Button_Element = document.getElementById(ID);
	if (Button_Element.getAttribute("State") == "Active"){
		Button_Element.setAttribute("State","Inactive");
		Button_Element.setAttribute("IsActive","false");
	} else if (Button_Element.getAttribute("State") == "Inactive"){
		Button_Element.setAttribute("State","Active");
		Button_Element.setAttribute("IsActive","true");
	} else if (Button_Element.getAttribute("State") == null){
		Button_Element.setAttribute("State","Active");
		Button_Element.setAttribute("IsActive","true");
	}
}

let ToggleButtons = document.querySelectorAll(".Toggle");
ToggleButtons.forEach(ToggleButtons_Element => {
	if (ToggleButtons_Element.getAttribute("IsActive") == null){
		if (ToggleButtons_Element.getAttribute("State") == "Active"){
			ToggleButtons_Element.setAttribute("IsActive", "true");
		} else {
			ToggleButtons_Element.setAttribute("IsActive", "false");
		}
	}
});

function Radio_Select(ID){
	var Radio_Button_Element = document.getElementById(ID);
	var Radio_Button_Parent_Element = document.getElementById(ID).parentNode;
	var Radio_Button_Parent_Children_Elements = Radio_Button_Parent_Element.children;
	for (a = 0; a < Radio_Button_Parent_Children_Elements.length; a++){
		Radio_Button_Parent_Children_Elements[a].setAttribute("State", "Inactive");
	}	
	Radio_Button_Parent_Element.setAttribute("Radio_ActiveButton", ID);
	Radio_Button_Element.setAttribute("State", "Active");
}


var Subwindows_ActiveSubwindows = [];
var Subwindows_CurrentlyActiveSubwindow;
function Subwindows_Open(ID){
	if (Subwindows_ActiveSubwindows.length <= 0){
		Element_Attribute_Set("Subwindows", "State", "Active");
		Element_Style_Animate("Subwindows", "Subwindow_MainContainer_Open", "0.3s", "forwards");
	}
	Subwindows_ActiveSubwindows.push(ID);
	Element_Attribute_Set(ID, "Visibility", "Open");
	Element_Style_Animate(ID, "Subwindow_Open", "0.3s", "forwards");
	for(a = 0; a < Subwindows_ActiveSubwindows.length - 1; a++){
		Element_Attribute_Set(Subwindows_ActiveSubwindows[a], "State", "Inactive");
	}
	Element_Attribute_Set(ID, "State", "Active");
	document.getElementById(ID).style.zIndex = Subwindows_ActiveSubwindows.length;
	Subwindows_CurrentlyActiveSubwindow = Subwindows_ActiveSubwindows[Subwindows_ActiveSubwindows.length - 1];
}

function Subwindows_Close(ID){
	Subwindows_ActiveSubwindows.splice(Subwindows_ActiveSubwindows.indexOf(ID), 1);
	Element_Style_Animate(ID, "Subwindow_Close", "0.3s", "forwards");
	setTimeout(function(){
		Element_Attribute_Remove(ID, "State");
		Element_Attribute_Remove(ID, "Visibility");
	}, 300);	
	if (Subwindows_ActiveSubwindows.length > 0){
		for(a = 0; a < Subwindows_ActiveSubwindows.length - 1; a++){
			Element_Attribute_Set(Subwindows_ActiveSubwindows[a], "State", "Inactive");
		}
		Element_Attribute_Set(Subwindows_ActiveSubwindows[Subwindows_ActiveSubwindows.length - 1], "State", "Active");
	} else if (Subwindows_ActiveSubwindows.length <= 0){
		Element_Style_Animate("Subwindows", "Subwindow_MainContainer_Close", "0.3s", "forwards");
		setTimeout(function(){
			Element_Attribute_Remove("Subwindows", "State");
		}, 300);	
	}
	Subwindows_CurrentlyActiveSubwindow = Subwindows_ActiveSubwindows[Subwindows_ActiveSubwindows.length - 1];
}


var Toasts_TotalCount = 1;
function Toasts_CreateToast(Toast_IconLink, Toast_Title_Text, Toast_Content_Text){
	var Toast_Div = document.createElement('div');
	Toast_Div.className = "Toast";
	Toast_Div.setAttribute("id", "Toast_" + Toasts_TotalCount);
	Toast_Div.setAttribute("onclick", "Toasts_CloseToast(this.id)");
	Toast_Div.style.animationName = "Toast_Open";
	Toast_Div.style.animationDuration = "0.3s";
	Toast_Div.style.animationFillMode = "forwards";
	setTimeout(function(){
		Toast_Div.style.animationName = "Toast_Close";
		Toast_Div.style.animationDuration = "0.3s";
		Toast_Div.style.animationFillMode = "forwards";
		setTimeout(function(){
			Toast_Div.style.display = "none";
		}, 300);
	}, 3000);
	document.getElementById("Toasts").appendChild(Toast_Div);


	var Toast_Icon = document.createElement('img');
	Toast_Icon.className = "Toast_Icon";
	Toast_Icon.src = Toast_IconLink;

	var Toast_Title = document.createElement('h2');
	Toast_Title.className = "Toast_Title";
	Toast_Title.innerHTML = Toast_Title_Text;
	
	var Toast_Content = document.createElement('p');
	Toast_Content.className = "Toast_Content";
	Toast_Content.innerHTML = Toast_Content_Text;
	document.getElementById("Toast_" + Toasts_TotalCount).appendChild(Toast_Icon);
	document.getElementById("Toast_" + Toasts_TotalCount).appendChild(Toast_Title);
	document.getElementById("Toast_" + Toasts_TotalCount).appendChild(Toast_Content);
	Toasts_TotalCount++;
}

function Toasts_CloseToast(ID){
	var Toast_Div = document.getElementById(ID);
	Toast_Div.style.animationName = "Toast_Close";
	Toast_Div.style.animationDuration = "0.3s";
	Toast_Div.style.animationFillMode = "forwards";
	setTimeout(function(){
		Toast_Div.style.display = "none";
	}, 300);
}

let TextAreas = document.querySelectorAll(".Input_Text_Long");
TextAreas.forEach(TextArea_Element => {
	if (TextArea_Element.getAttribute("Autoresize") == "true"){
		TextArea_Element.addEventListener('input', function(){
			this.style.height = 'auto';
			this.style.height = ((this.scrollHeight) - 20) + 'px';
		});
	}
});

function TextArea_SnapToSize_All(){
	TextAreas = document.querySelectorAll(".Input_Text_Long");
	TextAreas.forEach(TextArea_Element => {
		if (TextArea_Element.getAttribute("Autoresize") == "true"){
			TextArea_Element.style.height = 'auto';
			TextArea_Element.style.height = ((TextArea_Element.scrollHeight) - 20) + 'px';
		}
	});
}

function TextArea_SnapToSize(ID){
	TextAreas = document.getElementById(ID);
	if (TextAreas.getAttribute("Autoresize") == "true"){
		TextAreas.style.height = 'auto';
		TextAreas.style.height = ((TextAreas.scrollHeight) - 20) + 'px';
	}
}

async function Test_Transition(){
	LoadingScreen_Show();
	return new Promise (resolve => setTimeout(resolve, 5000));
}