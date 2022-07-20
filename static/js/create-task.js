
// date-time picker 
$(document).ready(function () {
    $('.datepicker').datetimepicker({
        minDate: new Date(),
        format: 'm/d/Y, h:i:s A'
    });
});


// task type dropdwn
$(document).ready(function () {
    $('select').formSelect();
});

// disable manual task entering
$('#task-name').on('change', function () {
    var taskName = $('#task-name').find(":selected").text();
    if (taskName == "Others") {
        $("#task-name-manual").prop('disabled', false);
    }
    else {
        $("#task-name-manual").prop('disabled', true);
    }
});

$('#add_summary_btn').on('click', function () {
    var summary = $('#input-summary').val();
    if (summary != "") {
        $('#task-list').prepend('<li>' + summary + ' (' + new Date().toLocaleString() + ')</li>');
        $('#input-summary').val('');
    }

})

var eid_valid = false;

// employee id validation function
function validateEmpid() {
    var empId = $("#emp-id").val();
    var eid_message = "";

    if (empId.length < 6 || empId.length > 6 || isNaN(empId)) {
        eid_valid = false;
        eid_message = "Please enter 6 digit employee id number.";
    }
    else {
        eid_valid = true;
        eid_message = "Employee id is valid."
    }
    if (eid_valid) {
        $("#validate-eid").removeClass("invalid")
        $("#validate-eid").addClass("valid")
    }
    else {
        $("#validate-eid").removeClass("valid")
        $("#validate-eid").addClass("invalid")
    }
    $("#validate-eid").text(eid_message);
}
$(document).ready(function () {
    // employee id validation
    $("#emp-id").on("keyup", validateEmpid);

    // disable login button until id and password are valid
    $("#task-submit-btn").on("click", function (e) {

        if (eid_valid) {
            return true;
        }
        else {
            e.preventDefault();
            return false;
        };
    })
});