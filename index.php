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
        <h2>ABOUT</h2>
        <div class="about">
            <p>// I am a
                with a strong programming background and a passion for writing clean, efficient code. As a Computer Science & Information Systems student at the University of Vermont</p>
            <div class="imageDiv">
                <img src="images/npd2.jpg">
                <p>Me writing some really impressive code (probably)</p>
            </div>

        </div>
        
    </div>
    <div class="content">
        <h2>PROJECTS</h2>
        <div class="projects"><?php
            $sql="SELECT fldName, fldDescription, fldLanguages, fldTools, fldDate, fldCodeLink, fldFinishedLink FROM tblProjects";
            $projects = $thisDBReader->select($sql);
        foreach ($projects as $project){
            print '<div class="project"><h3>'.$project['fldName'].'</h3><div class="languages">';
            $languages = explode (",", $project['fldLanguages']);
            foreach ($languages as $language){
                print '<p class="language" id="'.$language.'">'. $language. '</p>';
            }

            print'</div><p>'.$project['fldDescription'].'</p><div class="projectLinks">';
            if (!is_null($project['fldCodeLink'])){
                print '<a class="projectLink" href="'.$project['fldCodeLink'].'">View Code</a>';
            }
            if (!is_null($project['fldFinishedLink'])){
                print '<a class="projectLink" href="'.$project['fldFinishedLink'].'">View Project</a>';
            }
            print '</div></div>';

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