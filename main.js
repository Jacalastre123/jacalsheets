 function Arithmetic(first, second, type, lines, which, mode) {
    
            const holder = document.createElement("div")
		holder.classList = "holder"
            
            paper.appendChild(holder)
if (which == "Pericular") {
                const newQuest = document.createElement("p")
            
            switch(pericMode) {
                    case "Area":
                        const square1 = document.createElement("div")
                        square1.className = "Square"
                        square1.style.height = "40px"
                        square1.style.width = "80px"
                        newQuest.innerHTML = "Area: <br>Width: " + first + "<br>height: " + second
                        holder.appendChild(square1)
                        break;
                    case "Perimeter":
                        const square2 = document.createElement("div")
                        square2.className = "Square"
                           square2.style.height = first * 5 + "px"
                        square2.style.width = second * 5 + "px"
                        newQuest.innerHTML = "Perimeter: <br>Width: " + first + "<br>height: " + second
                        holder.appendChild(square2)
                        break;

                    case "Circumference":
                        const square3 = document.createElement("div")
                        square3.className = "circle"
                        
                        newQuest.innerHTML = "Circumference:<br>Radius: " + first
                        holder.appendChild(square3)
                        break;

                }
                holder.appendChild(newQuest)
            }

            else {
                const newQuest = document.createElement("h4")
            if (type == "/") {
                            newQuest.innerHTML = first + " ÷ " + second 
            }

            else if (type == "*") {
                            newQuest.innerHTML = first + " x " + second 
            }

            else if (type == "+") {
                            newQuest.innerHTML = first + " + " + second 
            }

            else {
                newQuest.innerHTML = first + " - " + second 
            }
            holder.appendChild(newQuest)
        }
           

             
            for (let i = 0; i < lines; i++) {
                const newLine = document.createElement("p")
                newLine.textContent = "__________________"
                holder.appendChild(newLine)
            }
            
        }

        function submit(button) {
            if (button.parentElement.classList.contains("arith")){
            Arithmetic(num1.value, num2.value, times.value, lines.value, "Arithmetic", null)
            }

            else if (button.parentElement.classList.contains("pericular") && pericMode == "Area") {
                Arithmetic(heights.value, widths.value, null, lines2.value, "Pericular", pericMode)
            }

            else if (button.parentElement.classList.contains("pericular") && pericMode == "Perimeter") {
                Arithmetic(heights.value, widths.value, null, lines2.value, "Pericular", pericMode)
            }

            else if (button.parentElement.classList.contains("pericular") && pericMode == "Circumference") {
                Arithmetic(radius.value, null, null, lines2.value, "Pericular", pericMode)
            }
        }

        function printing() {
            const footer = document.createElement("footer")
            footer.innerHTML = "<h3>JacalSheets</h3><br><p>https://jacalastre123.github.io/HomePage</p>"
            footer.classList = "foot"
            
            paper.appendChild(footer)
            window.print()
        }

        function check() {
            if (pericele.value == "RectangleAr") {
                pericMode = "Area"
                peric = false
                heights.style.display = "block"
                widths.style.display = "block"
                radius.style.display = "none"

                heightLabel.style.display = "block"
                widthLabel.style.display = "block"
                radiusLabel.style.display = "none"
            }

            else if (pericele.value == "RectanglePer") {
                pericMode = "Perimeter"
                peric = true
                heights.style.display = "block"
                widths.style.display = "block"
                radius.style.display = "none"

                heightLabel.style.display = "block"
                widthLabel.style.display = "block"
                radiusLabel.style.display = "none"
            }

            else if (pericele.value == "Circumference") {
                pericMode = "Circumference"
                peric = false
                heights.style.display = "none"
                widths.style.display = "none"
                radius.style.display = "block"

                heightLabel.style.display = "none"
                widthLabel.style.display = "none"
                radiusLabel.style.display = "block"
            } 

            }
        
            function random(button) {
                if (button.parentElement.classList.contains("arith")) {
                    num1.value = Math.floor(Math.random() * 12)
                    num2.value = Math.floor(Math.random() * 12)
                    decide = Math.floor(Math.random * 4) 
                    let option = times.options
                    times.value = option[decide].value
                    
                }

                if (button.parentElement.classList.contains("pericular")) {
                    if (peric || pericMode == "Area") {
                        heights.innerHTML = Math.floor(Math.random() * 12)
                        widths.innerHTML = Math.floor(Math.random() * 12)

                    }

                    else {
                        radius.innerHTML = Math.floor(Math.random() * 10)
                    }
                    
                }
            }
