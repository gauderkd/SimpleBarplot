/**
 * Created by kyle on 2016-05-24.
 */

// Options
    var spread = 30;


// Dictionary to be filled with Labels and Positions of each label
var list_barNums = [];
var list_objectNames = [];
var dictFlag = false;

// Prototype Object with most of the magic
function dataFile(label, option, dataVal) {

    // First, generate the name of the object
    this.objName = label + "_" + option + "_" + dataVal;
    // And add it to a big list
    list_objectNames.push(this.objName);

    // Next, check if the label is already in the dictionary
    // if it is, then give this new object that labels position
    dictFlag = false;
    if (list_barNums.length === 0) {
        dictFlag = true;
    } else {
        for (i = 0; i < list_barNums.length; i++) {
            var currentName = list_barNums[i].thisLabel;
            var currentposition = list_barNums[i].position;
            if (currentName === label) {
                this.position = currentposition;
            } else {
                dictFlag = true;
            }
        }
    }
    // If the label was not found within the dictionary, then push this new one to the next spot
    if (dictFlag === true) {
        this.position = list_barNums.length + 1;
        list_barNums.push({position: this.position, thisLabel:label});
    }

    //
    // At this point, we have a Label and Position
    //

    // Creating the label objects and putting them into positioning containers
    if (dictFlag === true) {
        // If position was just created, create a new positioning container
        this.labelInit = function () {
            $('#labelContain').append(
                '<div class="posContainer labelPOS' + this.position + '">' +
                '<div class="dataLabel ' + this.objName + ' ' + label + ' ' + option + '">' + label + '</div>' +
                '</div>'
            );
        };
    } else {
        // Otherwise, place it in an existing one
        this.labelInit = function () {
            $('.labelPOS' + this.position).append(
                '<div class="dataLabel ' + this.objName + ' ' + label + ' ' + option + '">' + label + '</div>'
            );
        };
    }

    //
    // At this point, we have a Label, Position, and an object function .labelInit() which appends the label in HTML
    //

    dictFlag = false;
// END
}


// Declaring objects
var Label1_1_54 = new dataFile("Label1", 1, 54);
var Label1_2_54 = new dataFile("Label1", 2, 54);
var Label1_3_54 = new dataFile("Label1", 3, 54);
var Label2_1_54 = new dataFile("Label2", 1, 54);
var Label2_2_54 = new dataFile("Label2", 2, 54);
var Label2_3_54 = new dataFile("Label2", 3, 54);
var Label3_1_54 = new dataFile("Label3", 1, 54);
var Label3_2_54 = new dataFile("Label3", 2, 54);
// Preparing Initialization of Objects
// var objectActivator = function() {
//     list_objectNames.forEach(function(value) {
//         object = eval(value);
//         object.labelInit();
//     });
// };
var objectActivator = function() {
    Label1_1_54.labelInit();
    Label2_1_54.labelInit();
    Label1_2_54.labelInit();
    Label2_2_54.labelInit();
    Label3_2_54.labelInit();
    Label1_3_54.labelInit();

}


// Activation. This is the point that all the HTML is actually appended
$(document).ready(objectActivator);

// And now, positioning of what's there

// Positioning the main Containers
$(document).ready(function() {
    for (i=0; i<list_barNums.length; i++) {
        var currentPOS = list_barNums[i].position;
        var POSclass = "labelPOS" + currentPOS;
        $('.' + POSclass).css({
            "top": i*spread+"px",
        });
    };
    $('.dividerBar').css({
        "height": 16+(spread*list_barNums.length)+4 + "px",
    });
});


// Demo Viewer
$(document).ready(function() {
    for (i=0; i<list_barNums.length; i++) {
        $('.test').append(
            '<p>' + list_barNums[i].thisLabel + ', ' + list_barNums[i].position + '</p>'
        )
    };
});