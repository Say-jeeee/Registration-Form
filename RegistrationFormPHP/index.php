<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="Assets/css/style.css">
</head>
<body>
    <div class="container">
        <form id="form">
            <h1>Register Now</h1>
            <div class="input-group">
                <label for="firstname">First Name</label>
                <input id="firstname" name="FirstName" type="text">
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="middlename">Middle Name</label>
                <input id="middlename" name="MiddleName" type="text">
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="lastname">Last Name</label>
                <input id="lastname" name="LastName" type="text">
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="suffix">Suffix</label>
                <select id="suffix" name="suffix">
                    <option value="">None</option>
                    <option value="jr">Jr</option>
                    <option value="sr">Sr</option>
                    <option value="l">l</option>
                    <option value="ll">ll</option>
                    <option value="lll">lll</option>
                    <option value="lV">lV</option>
                    <option value="V">V</option>
                </select>
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="Email">Email</label>
                <input id="email" name="ID" type="email">
                <div class="error"></div>            
            <div class="input-group">
                <label for="Year&Section">Year and Section</label>               
                <input type="radio" id="firstYear" name="yearLevel" value="1st Year" required>
                <label for="firstYear">1st Year</label>                
                <input type="radio" id="secondYear" name="yearLevel" value="2nd Year" required>
                <label for="secondYear">2nd Year</label>
                <input type="radio" id="thirdYear" name="yearLevel" value="3rd Year" required>
                <label for="thirdYear">3rd Year</label>                
                <div class="Batch">
                    <label for="Batch">Batch</label>
                    <select id="batch" name="batch">
                        <option value=" ">-- Select Batch --</option>
                        <option value="30">Batch 30</option>
                        <option value="31">Batch 31</option>
                        <option value="32">Batch 32</option>
                        <option value="33">Batch 33</option>
                        <option value="34">Batch 34</option>
                        <option value="35">Batch 35</option>
                    </select>
                </div>
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="Id">ID</label>
                <input id="Id" name="ID" type="text">
                <div class="error"></div>
            </div>
            <div class="input-group">
                <label for="technology">Technology</label>
                <select id="technology" name="Technology">
                    <option value="">--Select Technology--</option>
                    <option value="Computer Engineering">Computer Engineering</option>
                    <option value="Mechanical Engineering">Mechanical Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Electronics Engineering">Electronics Engineering</option>
                </select>
                <div class="error"></div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    <script src="Assets/js/script.js"></script>
</body>
</html>