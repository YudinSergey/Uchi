window.addEventListener("load",()=>{
   let task_field = document.createElement("div");
   let task_description = document.createElement("p");
   let button = document.createElement("a");
   let hint = document.createElement("div");
   document.body.appendChild(task_field);
   task_field.classList.add('task_field');
   task_field.appendChild(task_description);
   task_description.innerText=task.text;
   task_description.classList.add('task_description');
   for(let i=0;i<task.options.length;i++){
      let option = document.createElement("a");
      task_field.appendChild(option);
      option.innerText=task.options[i].value;
      option.classList.add('option');
      option.setAttribute("href", "#")
   }
   task_field.appendChild(button);
   button.innerText="Готово";
   button.classList.add('done_button');
   button.setAttribute("href", "#");
   task_field.appendChild(hint);
   hint.classList.add('hint');

   $('.option').on("click",(event)=>{
       let target = $(event.target);
       target.toggleClass('active_option');
       let options= document.querySelectorAll(".active_option");
       if(options.length>0&&button.classList.contains('active_done_button')==false){
           button.classList.add('active_done_button');
       }else if(options.length<1&&button.classList.contains('active_done_button')){
           button.classList.remove('active_done_button');
       }
   });

   $('.done_button').on("click", (event)=>{
       if(button.classList.contains('active_done_button')){
           let options= document.querySelectorAll(".active_option");
           let checkArr=[];
           for(let i=0; i<options.length; i++){
               checkArr.push(options[i].textContent);
           }
           let check=checkError(checkArr);
           console.log(check);
           if(check.length>0){
               if(button.classList.contains('error_done_button')==false){
                   button.classList.add('error_done_button');
               }
               check.forEach((i)=>{
                   for(let j=0; j<options.length; j++){
                      if(options[j].textContent==i){
                          options[j].classList.add('error_option');
                      }
                   }
               });
               for(let i=0; i<options.length; i++){
                   if(options[i].classList.contains('error_option')){
                       setTimeout(function(){options[i].classList.remove('error_option', 'active_option')},1000);
                       setTimeout(function(){button.classList.remove('error_done_button', 'active_done_button')},1000);
                   }else{
                       setTimeout(function(){options[i].classList.remove('active_option')},1000);
                   }
               }
               $('.hint').css("display","none");
               hint.innerText="Вычисли х";
               $('.hint').css("left","44.5%");
               setTimeout(function(){$('.hint').css("display","block")},1000);
           }else{
               let goodAnswers = [];
               for(let i =0; i<task.options.length; i++){
                   if(task.options[i].correctly==true){
                       goodAnswers.push(task.options[i].value);
                   }
               }
               let checkQuantity = options.length==goodAnswers.length;
               if(checkQuantity!=true){
                   button.classList.add('error_done_button');
                   let options= document.querySelectorAll(".active_option");
                   setTimeout(function(){button.classList.remove('error_done_button', 'active_done_button')},1000);
                   for(let i=0; i<options.length; i++){
                       setTimeout(function(){options[i].classList.remove('active_option')},1000);
                   }
                   $('.hint').css("display","none");
                   $('.hint').css("left","36%");
                   hint.innerText="Это не все правильные ответы";
                   setTimeout(function(){$('.hint').css("display","block")},1000);
                   console.log("Ещё не всё");
               }else{
                   $('.hint').css("display","none");
                   button.classList.add('well_done_button');
                   setTimeout(function(){$('.task_field').css("display","none")},1500);
               }
           }
           console.log(checkArr);
       }
   });
});




