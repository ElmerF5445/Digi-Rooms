/*
    Core functions
*/

window.Element_isntNull = function(ID){
	if (Element_Get_ByID(ID) == null){
		return false;
	} else {
		return true;
	}
}

window.Element_isNull = function(ID){
	if (Element_Get_ByID(ID) == null){
		return true;
	} else {
		return false;
	}
}

window.Element_Get_ByID = function(ID){
	return document.getElementById(ID);
}

window.Element_Get_ByQuery = function(Query){
	return document.querySelector(Query);
}

window.Element_Get_ByQuery_All = function(Query){
	return document.querySelectorAll(Query);
}

window.Element_Get_ByTag = function(ID, Tag){
	return document.getElementById(ID).getElementsByTagName(Tag);
}

window.Element_Clear = function(ID){
	document.getElementById(ID).innerHTML = "";
}

window.Element_Clear_ExceptFirst = function(ID){
	for (a = 1; a <= document.getElementById(ID).childNodes.length; a++){
		document.getElementById(ID).removeChild(document.getElementById(ID).lastChild)
	}
	// document.getElementById(ID).innerHTML = "";
}

window.Element_Create = function(Type){
	return document.createElement(Type);
}

window.Element_Append = function(ID, ChildToAppend){
	document.getElementById(ID).appendChild(ChildToAppend);
}

window.Element_Append_Direct = function(ID, InnerHTML){
	document.getElementById(ID).innerHTML += InnerHTML;
}

window.Element_InnerHTML_Set = function(ID, Value){
	document.getElementById(ID).innerHTML = Value;
}

window.Element_InnerText_Set = function(ID, Value){
	document.getElementById(ID).innerText = Value;
}

window.Element_Value_Get = function(ID){
	return Element_Get_ByID(ID).value;
}

window.Element_Value_Set = function(ID, Value){
	Element_Get_ByID(ID).value = Value;
}

window.Element_Attribute_Set = function(ID, Attribute, Value){
    Element_Get_ByID(ID).setAttribute(Attribute, Value);
}

window.Element_Attribute_Remove = function(ID, Attribute){
    Element_Get_ByID(ID).removeAttribute(Attribute);
}

window.Element_Attribute_Get = function(ID, Attribute){
	return Element_Get_ByID(ID).getAttribute(Attribute);
}

window.Element_Opacity_Set = function(ID, Opacity){
    if (Opacity >= 0 && Opacity <= 100){
		Element_Get_ByID(ID).style.opacity = Opacity + "%";
    }
}

window.Element_Style_Animate = function(ElementID, Animation_Name, Animation_Duration, Animation_FillMode){
	document.getElementById(ElementID).style.animationName = Animation_Name;
	document.getElementById(ElementID).style.animationDuration = Animation_Duration;
	document.getElementById(ElementID).style.animationFillMode = Animation_FillMode;
}

window.Element_Style_Animate_OnFinish_Display = function(ElementID, Animation_Name, Animation_Duration, Animation_FillMode, OnFinish_Display){
	document.getElementById(ElementID).style.animationName = Animation_Name;
	document.getElementById(ElementID).style.animationDuration = Animation_Duration;
	document.getElementById(ElementID).style.animationFillMode = Animation_FillMode;
	document.getElementById(ElementID).addEventListener("animationend", () => {
		Element_Style_Display(ElementID, OnFinish_Display);
	})
}

window.Element_Style_Animate_Batch_QuerySelector = function(QuerySelector, Animation_Name, Animation_Duration, Animation_FillMode, Animation_Iteration, Animation_Delay){
	var Element_Delay = 0;
	var Element_QuerySelector = document.querySelectorAll(QuerySelector);
	for (a = 0; a < Element_QuerySelector.length; a++){
		Element_QuerySelector[a].style.animationName = Animation_Name;
		Element_QuerySelector[a].style.animationDuration = Animation_Duration;
		Element_QuerySelector[a].style.animationFillMode = Animation_FillMode;
		Element_QuerySelector[a].style.animationIterationCount = Animation_Iteration;
		Element_Delay += Animation_Delay;
		if (Animation_Delay != 0){
			Element_QuerySelector[a].style.animationDelay = Element_Delay + "ms";
		} else {
			Element_QuerySelector[a].style.animationDelay = "0s";
		}
		
	}
}

window.Element_Style_Display = function(ElementID, ElementDisplay){
	document.getElementById(ElementID).style.display = ElementDisplay;
}

window.Page_ChangePage = async function(URL, Transition_Function, OpenInTab){
	if (Transition_Function){
		await Transition_Function();
	}
	
	// Sample usage
	/*
		async function Test_Transition(){
			LoadingScreen_Show();
			return new Promise (resolve => setTimeout(resolve, 5000));
		}
	*/
	if (OpenInTab == "Current" || OpenInTab == null){
		window.location = URL;
	} else if (OpenInTab == "New") {
		window.open(URL, '_blank');
	}
}

window.UF_Parameter_Get = function(Parameter){
    UF_Requested_Parameter = Parameter;
    UF_Parameter_Value = new URLSearchParams(window.location.search).get(Parameter);
    if (UF_Parameter_Value != null || UF_Parameter_Value != undefined){
        return UF_Parameter_Value;
    }
}

window.UF_Parameter_Set = function(Parameter, Value){
    UF_URL_Parameter = new URLSearchParams(window.location.search);
    UF_URL_Parameter.set(Parameter, Value);
    UF_URL = window.location.pathname + '?' + UF_URL_Parameter.toString();
    window.history.pushState({}, '', UF_URL);
}

window.UF_Parameter_Remove = function(Parameter){
	UF_URL_Parameter = new URLSearchParams(window.location.search);
    UF_URL_Parameter.delete(Parameter);
	if (UF_URL_Parameter.size > 0){
		UF_URL = window.location.pathname + '?' + UF_URL_Parameter.toString();
    	window.history.pushState({}, '', UF_URL);
	} else {
		UF_URL = window.location.pathname + UF_URL_Parameter.toString();
    	window.history.pushState({}, '', UF_URL);
	}
}

// Gets the current date
window.Date_Get = function(){
    const CurrentDate = new Date();
    var Date_Month_Index = CurrentDate.getMonth();
    var Date_Month_Array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var Date_Month = Date_Month_Array[Date_Month_Index];
    var Date_Day = CurrentDate.getDate();
    var Date_Year = CurrentDate.getFullYear();
    return `${Date_Day} ${Date_Month} ${Date_Year}`;
}

// Creates a unique key
window.Key_Generate = function(){
    const Time = new Date();
    var Time_Month = Time.getMonth();
    var Time_Day = Time.getDate();
    var Time_Year = Time.getFullYear();
    var Time_Hours = Time.getHours();
    var Time_Minutes = Time.getMinutes();
    var Time_Seconds = Time.getSeconds();
    return `${Time_Year}${Time_Month}${Time_Day}_${Time_Hours}${Time_Minutes}${Time_Seconds}`;
}

window.StorageItem_Set = function(Key, Data, Type){
	if (Type == "Local" || Type == null){
		localStorage.setItem(Key, JSON.stringify(Data));
	} else if (Type == "Session") {
		sessionStorage.setItem(Key, JSON.stringify(Data));
	}
}

window.StorageItem_Get = function(Key, Type){
	if (Type == "Local" || Type == null){
		return JSON.parse(localStorage.getItem(Key));
	} else if (Type == "Session") {
		return JSON.parse(sessionStorage.getItem(Key));
	}
}

window.Data_Import_FromPath = function(Path, Type){
	const request = new XMLHttpRequest();
    request.open("GET", Path, false);
    request.send();
    var Data_Raw = request.responseText;
    var Data_JSON = JSON.parse(Data_Raw);
	if (Type == "JSON" || Type == null){
		return Data_JSON;
	} else if (Type == "Raw") {
		return Data_Raw;
	}
}

window.Data_Import = function(FileInputElementID, Type){
	var File_Element = document.getElementById(FileInputElementID);
    var File_Element_File = File_Element.files[0];
    const Reader = new FileReader();
    Reader.onload = function(e){
        const Data_Raw = e.target.result;
        const Data_JSON = JSON.parse(Data_Raw);
		if (Type == "JSON" || Type == null){
			return Data_JSON;
		} else if (Type == "Raw") {
			return Data_Raw;
		}
    }

    Reader.readAsText(File_Element_File);
}

window.Data_Export = function(File_Data, File_Name, File_Extension, Type){
	var Data_Initial = File_Data;
	var Data_Final;
	if (Type == "JSON" || Type == null){
		Data_Final = JSON.stringify(Data_Initial, null, 2);
	} else if (Type == "Raw") {
		Data_Final = Data_Initial;
	}
	const Data_Blob = new Blob([Data_Final], {type: 'application/json'});
	saveAs(Data_Blob, `${File_Name}${File_Extension}`);
}