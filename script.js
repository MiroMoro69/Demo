
var btn = document.getElementById("btn");
var link = document.getElementById("theme");

btn.addEventListener("click", function () { ChangeTheme(); });



function ChangeTheme()
{
    let lightTheme = "light_theme.css";
    let darkTheme = "night_theme.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
     currTheme = darkTheme;
     theme = "night";
    }
    else
    {    
     currTheme = lightTheme;
     theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}