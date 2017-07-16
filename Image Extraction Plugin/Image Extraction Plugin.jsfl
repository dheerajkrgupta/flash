/*
Developer:	Dheeraj Kumar Gupta 
Email:		mediamaster.in@gmail.com
Location:	New Delhi, India
*/

	var folderURI = fl.browseForFolderURL('Select folder where all images should be exported as *.PNG');
	var doc = fl.getDocumentDOM();
	var newDoc = fl.createDocument();
	var library = doc.library;
	var allLibItems = library.items;
	var item;
	var c = 0;
	var selectedItemOnStage;
	var selectionArray;
	var itemName;
	var image;
	var hpx;
	var vpx
	
	if(doc && newDoc)
		{
		fl.outputPanel.trace("Start");
			for (var i = 0; i<allLibItems.length; ++i){
				item = allLibItems[i];
	            itemName = item.name;
        if(item.itemType == "graphic" || item.itemType == "movie clip" || item.itemType == "bitmap" || item.itemType == "button"){
			library.moveToFolder("", itemName, true); 
            newDoc.addItem({x:0.0, y:0.0}, item);
			image = newDoc.getTimeline().layers[0].frames[0].elements[0];
			hpx = Math.ceil(image.width);
		    vpx = Math.ceil(image.height);
			newDoc.width = hpx ;
			newDoc.height =  vpx;
			newDoc.align("top", true);
			newDoc.align("left", true);
            itemName = item.name.split('.')[0];
			newDoc.exportPNG(folderURI + "/"+itemName +".png",true,true);
            newDoc.selectAll();
			newDoc.deleteSelection();
			newDoc.selectNone();
        }
	    else
		{
		fl.trace("other items "+allLibItems[i]);
		}
    }
}
fl.closeAll(false);
fl.closeDocument(false);
