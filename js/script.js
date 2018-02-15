        $i = 0;
        $body = "";
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "data.xml", false);
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        $nodelist = xmlDoc.getElementsByTagName("element").length;
        for ($i = 0; $i < $nodelist; $i++) {
            $body += "<img src = '";
            $body += xmlDoc.getElementsByTagName("src")[$i].childNodes[0].nodeValue;
            $body += "' onclick=set(" + $i + ") >";
        }
        document.getElementById("body1").innerHTML = $body;

        function set($im) {
            $i = $im;
            $src = xmlDoc.getElementsByTagName("src")[$im].childNodes[0].nodeValue;
            $t = "<img src =  '" + $src + "'/>";
            document.getElementById("description").innerHTML = xmlDoc.getElementsByTagName("description")[$im].childNodes[0].nodeValue;
            $t += "<a href = '";
            $t += xmlDoc.getElementsByTagName("src")[$i].childNodes[0].nodeValue;
            $t += "' download><Button>Download</Button></a>";
            document.getElementById("img_m").innerHTML = $t;
        }

        function prev() {
            $i--;
            check();
            $src = xmlDoc.getElementsByTagName("src")[$i].childNodes[0].nodeValue;
            $t = "<img src =  '" + $src + "'/>";
            document.getElementById("description").innerHTML = xmlDoc.getElementsByTagName("description")[$i].childNodes[0].nodeValue;
            document.getElementById("img_m").innerHTML = $t;
        }

        function next() {
            $i++;
            check();
            console.log($i);
            $src = xmlDoc.getElementsByTagName("src")[$i].childNodes[0].nodeValue;
            $t = "<img src =  '" + $src + "'/>";
            document.getElementById("description").innerHTML = xmlDoc.getElementsByTagName("description")[$i].childNodes[0].nodeValue;
            document.getElementById("img_m").innerHTML = $t;
        }

        function check() {
            if ($i < 0) {
                $i = 8;
            }
            if ($i > $nodelist) {
                $i = 0;
            }
        }
        document.getElementById("tv").innerHTML = xmlDoc.getElementsByTagName("image");
