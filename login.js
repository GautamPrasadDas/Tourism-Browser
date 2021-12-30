function validate(form)/*Function to check usrid & password*/
{
    /*the foolowing code checks whether the entered userid and password are matching*/
    if(form.userid.value == "admin" && form.pswrd.value == "123")
        {
            window.open('Home.html') /* opens the target page while Id & password matches*/
        }
        else
        {
            alert("Error Password or Username")/* display error message*/
        }
}