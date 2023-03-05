<?php
include 'top.php';
?>
<main id="homeMain">
    <figure id="homeDisplay" class="home">
        <img class="logo" src="images/NDLogo.png" alt="Noel Desmarais' Logo">
        <div class="name">
            <h1>NOEL DESMARAIS</h1>
            <h2>Student - Full Stack Software Engineer - App Developer</h2>
        </div>

    </figure>
    <div class="content gradient">
        <h2>## ABOUT</h2>
        <p>// I am a
            with a strong programming background and a passion for creating . As a Computer Science & Information Systems student at the University of Vermont</p>

    </div>
    <div class="content">
        <h2>PROJECTS</h2>
        <div class="projects"><?php
            $sql="SELECT fldName, fldDescription, fldLanguages, fldTools, fldDate, fldLink FROM tblProjects";
            $projects = $thisDBReader->select($sql);
        foreach ($projects as $project){
            print '<a href="'.$project['fldLink'].'"><div class="project"><h3>'.$project['fldName'].'</h3><div class="languages">';
            $languages = explode (",", $project['fldLanguages']);
            foreach ($languages as $language){
                print '<p class="language" id="'.$language.'">'. $language. '</p>';
            }

            print'</div><p>'.$project['fldDescription'].'</p></div></a>';
//                print '<li><h3>$project['fldName']</h3><p>$project['fldDescription']</p></li>';
            }


            ?>
        </div>
    </div>

    <div class="overlay"></div>


    <?php
    include 'footer.php'
    ?>

</main>
    </body>
</html>