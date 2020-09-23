
      const serveUrl='https://utn-avanzada2-primerparcial.herokuapp.com';
      const getStudentApi='/api/student';
      const getCareerApi='/api/career';
      const deleteStudentApi='/api/student';
      
      var students = null;
      var careers = null;

      window.onload = () => {
          load();
      }


      function load(){
      
        Promise.all([getStudents(), getCareers() ])
        .then(()=>{
          
          students.forEach(element => {
            if(element.careerId  != undefined){ 
            element.career = careers.filter(c => c.careerId == element.careerId)[0];
            }
          });
          createTable();
        });
      }

      function createTable(){
        var table= document.getElementById("studentsTable");
        var tbody= table.querySelector("tbody");
        tbody.innerHTML="";

        students.sort( (a,b)=> {
          return a.lastName > b.lastName
        })


        students.forEach(element => {
          if(element.careerId != undefined) {
            if(element.career.active  != false){ 

            var row = tbody.insertRow(-1);
            row.insertCell(-1).innerHTML= element.studentId;
            row.insertCell(-1).innerHTML= element.career.name;
            row.insertCell(-1).innerHTML= element.lastName;
            row.insertCell(-1).innerHTML= element.firstName;
            row.insertCell(-1).innerHTML= element.email;

            var button= createButtonDelete(element.studentId);
            row.insertCell(-1).appendChild(button);
            }
          }
        });

      }


      function createButtonDelete(id)
      {
          var buttonDelete= document.createElement('button');
          buttonDelete.type="button";
          buttonDelete.value="Delete";
         buttonDelete.className="btn btn-danger btn-sm";
          buttonDelete.innerHTML ="Delete";
          buttonDelete.addEventListener('click',()=> delStudent(id));

          return buttonDelete;
      }

      function delStudent(id)
      {
          del(serveUrl + deleteStudentApi +'/'+id)
          .then((result)=>{
              load();
          });
      }


      async function getStudents()
      {
          const url = serveUrl + getStudentApi;
          var result = await get(url);
          students=result;
          //console.log(result);
      }

      async function getCareers()
      {
          const url = serveUrl + getCareerApi;
          var result = await get(url);
          careers=result;
          //console.log(result);
      }

    function get(url) {
        const request = new XMLHttpRequest()
        request.responseType = 'json'
        return new Promise((resolve, reject) => {
            request.open('GET', url)
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response)
                } else {
                    reject(request.statusText)
                }
            }
            request.onerror = () => reject(request.statusText)
            request.send()
        })
    }

    function del(url) {
        const request = new XMLHttpRequest()
        request.responseType = 'json';
        return new Promise((resolve, reject) => {
            request.open('DELETE', url);
            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(request.response)
                } else {
                    reject(request.statusText)
                }
            }
            request.onerror = () => reject(request.statusText)
            request.send();
        })
    }