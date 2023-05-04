


//for login button

function func1() {
    var nm = document.getElementById("exampleInputEmail1").value;
    var ag = document.getElementById("exampleInputPassword1").value;

    console.log("Email  :" + nm);
    console.log("Password :" + ag);
}



//for signup button

function func2() {
    var t = document.getElementById("exampleInputName").value;
    var u = document.getElementById("eexampleInputEmail1").value;
    var v = document.getElementById("exampleInputPhone").value;
    var w = document.getElementById("exampleInputPassword12").value;
    var x = document.getElementById("exampleInputPassword13").value;
    

    console.log("Name  :" + t);
    console.log("Email Id :" + u);
    console.log("phone Number :" + v);
    console.log("Password :" + w);
    console.log("Confirm Password :" + x);
}




<div class="mb-3">
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1">
</div>

<div class="mb-3 form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1">
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<input type="button" value="submit" class="btn btn-primary" ></input>
</form>




