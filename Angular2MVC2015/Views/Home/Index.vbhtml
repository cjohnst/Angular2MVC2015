@Code
    Layout = ""
End Code

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    

    <title>Test</title>

    <link rel="stylesheet" href="http://v4-alpha.getbootstrap.com/dist/css/bootstrap.min.css" />

    @Styles.Render("~/Content/Telerikcss")





</head>
<body>

    <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
        <a class="navbar-brand" href="#">Project name</a>
        <ul class="nav navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
            </li>
        </ul>
    </nav>

    <div class="container">

        <div class="starter-template">
            <h1>Bootstrap starter template</h1>
        </div>

    </div><!-- /.container -->



    <div class="container">

        <my-app>Loading...</my-app>




        <hr />
        <footer>
            <p>&copy; @DateTime.Now.Year - My ASP.NET Application</p>
        </footer>
    </div>


    <script type="text/javascript" src="../wwwroot/js/polyfills.bundle.js"></script>
    <script type="text/javascript" src="../wwwroot/js/vendor.bundle.js"></script>
    <script type="text/javascript" src="../wwwroot/js/app.bundle.js"></script>


 

</body>
</html>


