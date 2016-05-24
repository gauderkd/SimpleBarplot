/**
 * Created by kyle on 2016-05-24.
 */

// Dictionary to be filled with Labels and Positions of each label
var list_barNums = [];
var dictFlag = false;

// Prototype Object with most of the magic
function dataFile(label, option, dataVal) {
    
    // First, check if the label is already in the dictionary
    // if it is, then give this new object that labels position
    dictFlag = false;
    for (i=0; i<list_barNums; i++) {
        var currentName = list_barNums[i].thisLabel;
        var currentposition = list_barNums[i].position;
        if (currentName === label) {
            var position = currentPosition;
        } else {
            dictFlag = true;
        }
    }
    // If the label was not found within the dictionary, then push this new one to the next spot
    if (dictFlag = false) {
        list_barNums.push({position: (list_barNums.length + 1), thisLabel:this.label});
    }

    // At this point, we have a Label and Position
    
    // Creating the axis spacing and adding the label
    this.labelInit = function() {
        
    }



// END
}

// Declaring objects
var dataPointOne = new dataFile("Label 1", 1, 54);