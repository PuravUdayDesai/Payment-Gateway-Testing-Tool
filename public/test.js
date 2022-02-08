var errorCount = 0;
var warningCount = 0;
var successCount = 0;
class PaymentData {

    constructor(misNumber,
        fullName,
        emailId,
        contactNumber,
        dateOfBirth,
        departmentName,
        academicYear,
        feeCategory,
        totalFees,
        tutionFees,
        developmentFees,
        gymkhanaFees,
        trainingFees,
        internetFees,
        boatClubFees,
        examinationFees,
        otherFees1,
        otherFees2,
        cardNumber,
        cardHolderName,
        expirationDate,
        cvv,
        remarks) {
        this.misNumber = misNumber;
        this.fullName = fullName;
        this.emailId = emailId;
        this.contactNumber = contactNumber;
        this.dateOfBirth = dateOfBirth;
        this.departmentName = departmentName;
        this.academicYear = academicYear;
        this.feeCategory = feeCategory;
        this.totalFees = totalFees;
        this.tutionFees = tutionFees;
        this.developmentFees = developmentFees;
        this.gymkhanaFees = gymkhanaFees;
        this.trainingFees = trainingFees;
        this.internetFees = internetFees;
        this.boatClubFees = boatClubFees;
        this.examinationFees = examinationFees;
        this.otherFees1 = otherFees1;
        this.otherFees2 = otherFees2;
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
        this.remarks = remarks;
    }

    validateMisNumber() {
        // check null constraint
        if (this.misNumber.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "MIS Number is Empty"
            };
        }

        // check numeric constraint
        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(this.misNumber)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "MIS Number contains illegal characters"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateFullName() {
        // check null constraint
        if (this.fullName.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Full Name is Empty"
            };
        }

        // check alpha constraint
        let regex = new RegExp("^[a-zA-Z ]*$");
        if (!regex.test(this.fullName)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Full Name contains illegal characters"
            };
        }

        // check if there are more than 1 strings on split()
        const names = this.fullName.trim().split(" ");
        if (names.length < 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Full Name contains only 1 name"
            };
        }

        // check if there are extra spaces in start/end
        if (this.fullName.trim().length != this.fullName.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "Full Name contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateEmailId() {
        // check null constraint
        if (this.emailId.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "EmailId is Empty"
            };
        }

        let regex = /\S+@\S+\.\S+/;
        if (!regex.test(this.emailId)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "EmailId contains illegal characters"
            };
        }

        // check if there are extra spaces in start/end
        if (this.emailId.trim().length != this.emailId.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "EmailId contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };

    }

    validateContactNumber() {
        // check null constraint
        if (this.contactNumber.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Contact Number is Empty"
            };
        }

        if (this.contactNumber.length != 10) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Contact Number is invalid"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(this.contactNumber)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Contact Number contains illegal characters"
            };
        }

        if (this.contactNumber.charAt(0) != '6' && this.contactNumber.charAt(0) != '7' && this.contactNumber.charAt(0) != '8' && this.contactNumber.charAt(0) != '9') {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Contact Number cannot begin with \'" + this.contactNumber.charAt(0) + "\'"
            };
        }

        // check if there are extra spaces in start/end
        if (this.contactNumber.trim().length != this.contactNumber.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "Contact Number contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateDateOfBirth() {
        // check null constraint
        if (this.dateOfBirth.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth is Empty"
            };
        }

        if (this.dateOfBirth.length != 10) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth format is incorrect"
            };
        }

        var dates = this.dateOfBirth.split("/");

        if (dates.length != 3) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth format is incorrect"
            };
        }

        if (dates[0].length != 2 || dates[1].length != 2 || dates[2].length != 4) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth format is incorrect"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(dates[0]) || !regex.test(dates[1]) || !regex.test(dates[2])) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth contains illegal characters"
            };
        }

        if (parseInt(dates[0]) > 31) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date cannot exceed 31"
            };
        }

        if (parseInt(dates[1]) > 12) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Month cannot exceed 12"
            };
        }

        if (parseInt(dates[2]) > new Date().getFullYear()) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Year cannot exceed " + new Date().getFullYear()
            };
        }

        var now = new Date();
        var enteredDate = new Date(parseInt(dates[2]), parseInt(dates[1]), parseInt(dates[0]), 0, 0, 0, 0);

        if (enteredDate > now) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Date of Birth cannot be in future time"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };

    }

    validateDepartmentName() {
        // check null constraint
        if (this.departmentName.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Department Name is Empty"
            };
        }

        // check alpha constraint
        let regex = new RegExp("^[a-zA-Z ]*$");
        if (!regex.test(this.departmentName)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Department Name contains illegal characters"
            };
        }

        // check if there are more than 1 strings on split()
        const names = this.departmentName.trim().split(" ");
        if (names.length < 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Department Name contains only 1 name"
            };
        }

        // check if there are extra spaces in start/end
        if (this.departmentName.trim().length != this.departmentName.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "Department Name contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateAcademicYear() {
        // check null constraint
        if (this.academicYear.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Academic Year is Empty"
            };
        }

        if (this.academicYear.length != 7) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Academic Year format is incorrect"
            };
        }

        var dates = this.academicYear.split("-");

        if (dates.length != 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Academic Year format is incorrect"
            };
        }

        if (dates[0].length != 4 || dates[1].length != 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Academic Year format is incorrect"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(dates[0]) || !regex.test(dates[1])) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Academic Year contains illegal characters"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateTotalFees() {
        // check null constraint
        if (this.totalFees.length == 0) {
            errorCount += 10;
            return {
                "result": "ERROR",
                "reason": "Total Fees is Empty"
            };
        }

        var totalFeesInt = parseInt(this.totalFees);
        if (this.totalFeesInt < 0) {
            errorCount += 10;
            return {
                "result": "ERROR",
                "reason": "Total Fees cannot be negative"
            };
        }

        if (this.totalFeesInt == 0) {
            warningCount += 10;
            return {
                "result": "WARNING",
                "reason": "Total Fees is zero"
            };
        }

        if (parseInt(this.tutionFees) < 0 ||
            parseInt(this.developmentFees) < 0 ||
            parseInt(this.gymkhanaFees) < 0 ||
            parseInt(this.trainingFees) < 0 ||
            parseInt(this.internetFees) < 0 ||
            parseInt(this.boatClubFees) < 0 ||
            parseInt(this.examinationFees) < 0 ||
            parseInt(this.otherFees1) < 0 ||
            parseInt(this.otherFees2) < 0) {
            errorCount += 10;
            return {
                "result": "ERROR",
                "reason": "Fees cannot be negative"
            }
        }


        var sum = parseInt(this.tutionFees.length == 0 ? "0" : this.tutionFees) +
            parseInt(this.developmentFees.length == 0 ? "0" : this.developmentFees) +
            parseInt(this.gymkhanaFees.length == 0 ? "0" : this.gymkhanaFees) +
            parseInt(this.trainingFees.length == 0 ? "0" : this.trainingFees) +
            parseInt(this.internetFees.length == 0 ? "0" : this.internetFees) +
            parseInt(this.boatClubFees.length == 0 ? "0" : this.boatClubFees) +
            parseInt(this.examinationFees.length == 0 ? "0" : this.examinationFees) +
            parseInt(this.otherFees1.length == 0 ? "0" : this.otherFees1) +
            parseInt(this.otherFees2.length == 0 ? "0" : this.otherFees2);


        if (sum != totalFeesInt) {
            warningCount += 10;
            return {
                "result": "WARNING",
                "reason": "Total Fees is not getting Tallied"
            };
        }

        successCount += 10;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };

    }

    validateCardNumber() {
        // check null constraint
        if (this.cardNumber.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Number is Empty"
            };
        }

        if (this.cardNumber.length != 16) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Number is invalid"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(this.cardNumber)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Number contains illegal characters"
            };
        }

        // check if there are extra spaces in start/end
        if (this.cardNumber.trim().length != this.cardNumber.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "Card Number contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateCardHolderName() {
        // check null constraint
        if (this.cardHolderName.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Holder Name is Empty"
            };
        }

        // check alpha constraint
        let regex = new RegExp("^[a-zA-Z ]*$");
        if (!regex.test(this.cardHolderName)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Holder Name contains illegal characters"
            };
        }

        // check if there are more than 1 strings on split()
        const names = this.cardHolderName.trim().split(" ");
        if (names.length < 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Card Holder Name contains only 1 name"
            };
        }

        // check if there are extra spaces in start/end
        if (this.cardHolderName.trim().length != this.cardHolderName.length) {
            warningCount++;
            return {
                "result": "WARNING",
                "reason": "Card Holder Name contains spaces in start/end"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateExpirationDate() {
        // check null constraint
        if (this.expirationDate.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date is Empty"
            };
        }

        if (this.expirationDate.length != 5) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date format is incorrect"
            };
        }

        var dates = this.expirationDate.split("/");

        if (dates.length != 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date format is incorrect"
            };
        }

        if (dates[0].length != 2 || dates[1].length != 2) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date format is incorrect"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(dates[0]) || !regex.test(dates[1])) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date contains illegal characters"
            };
        }

        if (parseInt(dates[0]) > 12) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Month cannot exceed 12"
            };
        }

        if (parseInt("20" + dates[1]) < new Date().getFullYear()) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Year cannot deceed " + new Date().getFullYear()
            };
        }

        var now = new Date();
        var enteredDate = new Date(parseInt("20" + dates[1]), parseInt(dates[0]), 0, 0, 0, 0, 0);

        if (enteredDate < now) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "Expiration Date cannot be in past time"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

    validateCVV() {
        // check null constraint
        if (this.cvv.length == 0) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "CVV is Empty"
            };
        }

        if (this.cvv.length != 3) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "CVV is invalid"
            };
        }

        let regex = new RegExp('^[0-9]+$');
        if (!regex.test(this.cvv)) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "CVV contains illegal characters"
            };
        }

        // check if there are extra spaces in start/end
        if (this.cvv.trim().length != this.cvv.length) {
            errorCount++;
            return {
                "result": "ERROR",
                "reason": "CVV contains illegal characters"
            };
        }

        successCount++;
        return {
            "result": "SUCCESS",
            "reason": "Passed all cases"
        };
    }

}


$(document).ready(() => {
    $("#PayNow").click(() => {

        errorCount = 0;
        warningCount = 0;
        successCount = 0;

        let paymentDetails = new PaymentData(
            $("#MISNumberTextField").val(),
            $("#FullNameTextField").val(),
            $("#EmailIdTextField").val(),
            $("#ContactNumberTextField").val(),
            $("#DateofBirthTextField").val(),
            $("#DepartmentNameTextField").val(),
            $("#AcademicYearTextField").val(),
            $("#FeeCategoryTextField").val(),
            $("#TotalFeesTextField").val(),
            $("#TutionFeesTextField").val(),
            $("#DevelopmentFeesTextField").val(),
            $("#GymkhanaFeesTextField").val(),
            $("#TrainingFeesTextField").val(),
            $("#InternetFeesTextField").val(),
            $("#BoatClubFeesTextField").val(),
            $("#ExaminationFeesTextField").val(),
            $("#OtherFees1TextField").val(),
            $("#OtherFees2TextField").val(),
            $("#CardNumberTextField").val(),
            $("#CardHolderNameTextField").val(),
            $("#ExpirationDateTextField").val(),
            $("#CVVTextField").val(),
            $("#RemarksTextField").val());

        var colorOfResult = "red";

        var resultHTML = `
        <table style="border-collapse: collapse; border: 1px solid black; width: 100%; font-family: Lucida Console, Courier New, monospace;">
            <tr>
                <th style="border: 1px solid black;" height="50">
                    Field Name
                </th>
                <th style="border: 1px solid black;" height="50">
                    Field Value
                </th>
                <th style="border: 1px solid black;" height="50">
                    Result
                </th>
                <th style="border: 1px solid black;" height="50">
                    Message
                </th>
            </tr>`;

        /*
         *                  MIS Number Validation
         */
        var misNumberResult = paymentDetails.validateMisNumber();

        if (misNumberResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (misNumberResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
            <tr>
                <td style="border: 1px solid black;" height="30">
                    MIS Number
                </td>
                <td style="border: 1px solid black;" height="30">
                    ${$("#MISNumberTextField").val().length == 0 ? null : $("#MISNumberTextField").val()}
                </td>
                <td style="border: 1px solid black;text-align: center;" height="30">
                    <font color=${colorOfResult}>
                        ${misNumberResult.result}
                    </font>
                </td>
                <td style="border: 1px solid black;" height="30">
                    ${misNumberResult.reason}
                </td>
            </tr>`;

        /*
         *               Full Name Validation
         */
        var fullNameResult = paymentDetails.validateFullName();

        if (fullNameResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (fullNameResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Full Name
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#FullNameTextField").val().length == 0 ? null : $("#FullNameTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${fullNameResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${fullNameResult.reason}
            </td>
        </tr>`;

        /*
         *               Email Id Validation
         */
        var emailIdResult = paymentDetails.validateEmailId();

        if (emailIdResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (emailIdResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Email Id
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#EmailIdTextField").val().length == 0 ? null : $("#EmailIdTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${emailIdResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${emailIdResult.reason}
            </td>
        </tr>`;

        /*
         *             Contact Number Validation
         */
        var contactNumberResult = paymentDetails.validateContactNumber();

        if (contactNumberResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (contactNumberResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Contact Number
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#ContactNumberTextField").val().length == 0 ? null : $("#ContactNumberTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${contactNumberResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${contactNumberResult.reason}
            </td>
        </tr>`;

        /*
         *             Date of Birth Validation
         */
        var dateOfBirthResult = paymentDetails.validateDateOfBirth();

        if (dateOfBirthResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (dateOfBirthResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Date of Birth
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#DateofBirthTextField").val().length == 0 ? null : $("#DateofBirthTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${dateOfBirthResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${dateOfBirthResult.reason}
            </td>
        </tr>`;

        /*
         *             Department Name Validation
         */
        var departmentNameResult = paymentDetails.validateDepartmentName();

        if (departmentNameResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (departmentNameResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Department Name
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#DepartmentNameTextField").val().length == 0 ? null : $("#DepartmentNameTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${departmentNameResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${departmentNameResult.reason}
            </td>
        </tr>`;

        /*
         *             Academic Year Validation
         */
        var academicYearResult = paymentDetails.validateAcademicYear();

        if (academicYearResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (academicYearResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Academic Year
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#AcademicYearTextField").val().length == 0 ? null : $("#AcademicYearTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${academicYearResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${academicYearResult.reason}
            </td>
        </tr>`;

        /*
         *             Total Fees Validation
         */
        var totalFeesResult = paymentDetails.validateTotalFees();

        if (totalFeesResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (totalFeesResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Total Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#TotalFeesTextField").val().length == 0 ? 0 : $("#TotalFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Tution Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#TutionFeesTextField").val().length == 0 ? 0 : $("#TutionFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Development Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#DevelopmentFeesTextField").val().length == 0 ? 0 : $("#DevelopmentFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Gymkhana Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#GymkhanaFeesTextField").val().length == 0 ? 0 : $("#GymkhanaFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Training and Placement Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#TrainingFeesTextField").val().length == 0 ? 0 : $("#TrainingFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Internet and Email Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#InternetFeesTextField").val().length == 0 ? 0 : $("#InternetFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Boat Club Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#BoatClubFeesTextField").val().length == 0 ? 0 : $("#BoatClubFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Examination Fees
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#ExaminationFeesTextField").val().length == 0 ? 0 : $("#ExaminationFeesTextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Other Fees 1
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#OtherFees1TextField").val().length == 0 ? 0 : $("#OtherFees1TextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Other Fees 2
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#OtherFees2TextField").val().length == 0 ? 0 : $("#OtherFees2TextField").val()} ₹
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${totalFeesResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${totalFeesResult.reason}
            </td>
        </tr>`;


        /*
         *             Card Number Validation
         */
        var cardNumberResult = paymentDetails.validateCardNumber();

        if (cardNumberResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (cardNumberResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Card Number
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#CardNumberTextField").val().length == 0 ? null : $("#CardNumberTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${cardNumberResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${cardNumberResult.reason}
            </td>
        </tr>`;


        /*
         *             Card Holder Name Validation
         */
        var cardHolderNameResult = paymentDetails.validateCardHolderName();

        if (cardHolderNameResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (cardHolderNameResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Card Holder Name
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#CardHolderNameTextField").val().length == 0 ? null : $("#CardHolderNameTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${cardHolderNameResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${cardHolderNameResult.reason}
            </td>
        </tr>`;


        /*
         *             Expiration Date Validation
         */
        var expirationDateResult = paymentDetails.validateExpirationDate();

        if (expirationDateResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (expirationDateResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                Expiration Date
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#ExpirationDateTextField").val().length == 0 ? null : $("#ExpirationDateTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${expirationDateResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${expirationDateResult.reason}
            </td>
        </tr>`;


        /*
         *                           CVV Validation
         */
        var cvvResult = paymentDetails.validateCVV();

        if (cvvResult.result == "SUCCESS") {
            colorOfResult = "green";
        }
        else if (cvvResult.result == "WARNING") {
            colorOfResult = "yellow";
        }
        else {
            colorOfResult = "red";
        }

        resultHTML += `        
        <tr>
            <td style="border: 1px solid black;" height="30">
                CVV
            </td>
            <td style="border: 1px solid black;" height="30">
                ${$("#CVVTextField").val().length == 0 ? "***" : $("#CVVTextField").val()}
            </td>
            <td style="border: 1px solid black;text-align: center;" height="30">
                <font color=${colorOfResult}>
                    ${cvvResult.result}
                </font>
            </td>
            <td style="border: 1px solid black;" height="30">
                ${cvvResult.reason}
            </td>
        </tr>`;

        resultHTML += `</table>`;


        var resultWindow = window.open("", "Result Window", "width=1000,height=700;");
        resultWindow.document.write(resultHTML);
        resultWindow.document.title = "Detailed Test Results";

        var resultHTMLSummary = `
            <table style="border-collapse: collapse; border: 1px solid black; width: 100%; font-family: Lucida Console, Courier New, monospace;">
                <tr>
                    <th style="border: 1px solid black;" height="50">
                        Status Name
                    </th>
                    <th style="border: 1px solid black;" height="50">
                        Count
                    </th>
                </tr>
                <tr>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        Success
                    </td>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        <font color="green">${successCount}</font>
                    </td>
                </tr>
                <tr>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        Warning
                    </td>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        <font color="yellow">${warningCount}</font>
                    </td>
                </tr>
                <tr>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        Error
                    </td>
                    <td style="border: 1px solid black;text-align: center;" height="30">
                        <font color="red">${errorCount}</font>
                    </td>
                </tr>
            </table>
        `;

        sessionStorage.setItem("ErrorCount", errorCount);
        sessionStorage.setItem("WarningCount", warningCount);
        sessionStorage.setItem("SuccessCount", successCount);

        var resultSummaryWindow = window.open("", "Result Summary Window", "width=500,height=200;");
        resultSummaryWindow.document.write(resultHTMLSummary);
        resultSummaryWindow.document.title = "Test Results Summary";

        var graphWindow = window.open("graph.html", "_blank", "width=500,height=300;");
        graphWindow.document.title = "Test Results Graph";        



    });
});