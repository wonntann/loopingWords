                    var texts = ["swimming with the dolphins.", "skipping stones.", "riding ten."];
                    var count = 0;
                    function changeText() {
                        $("#example").text(texts[count]);
                        count < 3 ? count++ : count = 0;
                    }
                    setInterval(changeText, 5000);