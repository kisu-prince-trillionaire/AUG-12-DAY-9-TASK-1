function printvalue(){  
    var name=document.form1.name.value;  
    alert("Welcome: "+name);  
    } 
    function printemail(){  
        var name=document.form1.email.value;  
        alert("Welcome: "+email);  
        }
        function printpass(){  
            var name=document.form1.pass.value;  
            alert("Welcome: "+pass);  
            } 
            function printregister(){  
                var name=document.form1.name.value;  
                alert("Welcome: "+name + ", You have successfully registered");  
                }  
                const myModal = document.getElementById('myModal')
                const myInput = document.getElementById('myInput')
                
                myModal.addEventListener('shown.bs.modal', () => {
                  myInput.focus()
                })