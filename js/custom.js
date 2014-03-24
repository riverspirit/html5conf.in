$(document).ready(function () {
    var speakers = [];

    // Shwetank
    speakers[0] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/shwetank-dixit.jpg">'
                + '</div>'
                + '<h4>Shwatank Dixit</h4>'
                + '<h6>Developer Evangelist</h6>'
                + '<h6>Opera</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/shwetankdixit">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="https://plus.google.com/117951516568096800242/">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="https://twitter.com/shwetank">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://in.linkedin.com/pub/shwetank-dixit/2/a6/b43">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Nick
    speakers[1] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/nick-desaulniers.jpg">'
                + '</div>'
                + '<h4>Nick Desaulniers</h4>'
                + '<h6>ECMAScript Dermatologist</h6>'
                + '<h6>Mozilla</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="https://twitter.com/LostOracle">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://www.linkedin.com/profile/view?id=119943281">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Praseed
    speakers[2] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/praseed-pai.jpg">'
                + '</div>'
                + '<h4>Praseed Pai</h4>'
                + '<h6>Principal Consultant</h6>'
                + '<h6>Godel-Number Consulting</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/praseedpai.kt">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="https://twitter.com/praseed3point14">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://www.linkedin.com/profile/view?id=89542017">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Shine
    speakers[3] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/speaker-placeholder.jpg">'
                + '</div>'
                + '<h4>Shine Xavier</h4>'
                + '<h6>Technical Architect</h6>'
                + '<h6>UST Global</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/shine.xavier.98">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="https://plus.google.com/116067995930414489189/">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://in.linkedin.com/in/shinexavier">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Girish
    speakers[4] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/speaker-placeholder.jpg">'
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

    // Haider
    speakers[5] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/speaker-placeholder.jpg">'
                + '</div>'
                + '<h4>Syed Aqueel Haider</h4>'
                + '<h6>Frontend Engineer</h6>'
                + '<h6>peel-works</h6>'

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
                    + '<img alt="html5-devconf-speaker" src="images/speakers/ashwin-krishnan.jpg">'
                + '</div>'
                + '<h4>Ashwin Krishnan</h4>'
                + '<h6>Developer</h6>'
                + '<h6>Verwe Interactive</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/inkwash">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="https://plus.google.com/+AshwinKrishn">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="https://twitter.com/inkwash">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://in.linkedin.com/pub/ashwin-krishnan/13/927/a96">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Rahul
    speakers[7] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/rahul-ramesh.jpg">'
                + '</div>'
                + '<h4>Rahul Ramesh</h4>'
                + '<h6>CEO</h6>'
                + '<h6>Codeyssus</h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/theCoderDotIn">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="https://plus.google.com/+RahulRamesh91">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-tw">'
                            + '<a href="https://twitter.com/theCoderDotIn">twitter</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://in.linkedin.com/in/thecoderdotin">linkedin</a>'
                        + '</li>'
                    + '</ul>'

                + '</div>'
            + '</div>';

    // Praveen
    speakers[8] = '<div class="c-speaker-each text-center">'
                + '<div class="c-speaker-img-wrap">'
                    + '<img alt="html5-devconf-speaker" src="images/speakers/praveen-sridhar.jpg">'
                + '</div>'
                + '<h4>Praveen Sridhar</h4>'
                + '<h6>Hardware hacker</h6>'
                + '<h6></h6>'

                + '<div class="c-speaker-social-icons">'

                    + '<ul>'
                        + '<li class="c-speaker-fb">'
                            + '<a href="https://www.facebook.com/praveenshridhar">facebook</a>'
                        + '</li>'
                        + '<li class="c-speaker-gp">'
                            + '<a href="https://plus.google.com/+PraveenSridhar13">google+</a>'
                        + '</li>'
                        + '<li class="c-speaker-in">'
                            + '<a href="http://in.linkedin.com/in/praveensridhar">linkedin</a>'
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

    var credits_info = {
        'arun': 'Arun Haridas <a href="http://google.com>google</a>"'
    };
    $('.credits-name-link').mouseenter(function() {
        var info_text = $(this).data('mouseover');
        $('#selected-person-info-contain').typeTo(info_text);
    });

    $('#masthead').typeTo('html');

    setTimeout(function () {
        $('#masthead').typeTo('#html5devconf');
    }, 2000);
});

