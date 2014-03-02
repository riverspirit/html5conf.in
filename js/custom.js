$(document).ready(function () {
    var speakers = [];

    // Shwetank
    speakers[0] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/shwetank-dixit.jpg">'
                + '</div>'
                + '<h4>Shwatank Dixit</h4>'
                + '<h6>Developer Evangelist</h6>'
                + '<h6>Opera</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Nick
    speakers[1] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/nick-desaulniers.jpg">'
                + '</div>'
                + '<h4>Nick Desaulniers</h4>'
                + '<h6>ECMAScript Dermatologist</h6>'
                + '<h6>Mozilla</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Praseed
    speakers[2] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/praseed-pai.jpg">'
                + '</div>'
                + '<h4>Praseed Pai</h4>'
                + '<h6>Principal Consultant</h6>'
                + '<h6>Godel-Number Consulting</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Shine
    speakers[3] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speaker-placeholder.jpg">'
                + '</div>'
                + '<h4>Shine Xavier</h4>'
                + '<h6>Technical Architect</h6>'
                + '<h6>UST Global</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Girish
    speakers[4] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speaker-placeholder.jpg">'
                + '</div>'
                + '<h4>Girish Kulkarni</h4>'
                + '<h6>--</h6>'
                + '<h6>--</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Syed
    speakers[5] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speaker-placeholder.jpg">'
                + '</div>'
                + '<h4>Syed Aqueel Haider</h4>'
                + '<h6>Principal Consultant</h6>'
                + '<h6>Godel-Number Consulting</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Ashwin
    speakers[6] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/ashwin-krishnan.jpg">'
                + '</div>'
                + '<h4>Ashwin Krishnan</h4>'
                + '<h6>Developer</h6>'
                + '<h6>Verwe Interactive</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Rahul
    speakers[7] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/rahul-ramesh.jpg">'
                + '</div>'
                + '<h4>Rahul Ramesh</h4>'
                + '<h6>CEO</h6>'
                + '<h6>Codeyssus</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Praveen
    speakers[8] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/praveen-sridhar.jpg">'
                + '</div>'
                + '<h4>Praveen Sridhar</h4>'
                + '<h6>Hardware hacker</h6>'
                + '<h6>-</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="#">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="#">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="#">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="#">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Now lets quirky rotate :)

    var stage = 0, // [0-3]
        person = 3; // [0-8]

    var rotate = window.setInterval(function () {
        stage = (stage <= 3) ? stage : 0;

        $('#speaker-info-' + stage).fadeOut(function () {
            person++;
            person = (person <= 8) ? person : 0;
            $('#speaker-info-' + stage).html(speakers[person]);
            $('#speaker-info-' + stage).fadeIn();
            stage++;
        });
    }, 3000);
});

