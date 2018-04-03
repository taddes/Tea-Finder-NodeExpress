$(document).ready(function () {
  console.log("ready!");

  $(".surveyForm").on("submit", function (subm) {

      subm.preventDefault();

      // User input values
      var answersPush = {
          name: $("#name").val().trim(),
          image: $("#photo").val().trim(),
          q1: $("input[name=q1]:checked").val(),
          q2: $("input[name=q2]:checked").val(),
          q3: $("input[name=q3]:checked").val(),
          q4: $("input[name=q4]:checked").val(),
          q5: $("input[name=q5]:checked").val(),
          q6: $("input[name=q6]:checked").val(),
          q7: $("input[name=q7]:checked").val()
      };

      console.log(answersPush);

      // Modal functionality. Answers pushed into modal
      $.post("/api/friends", answersPush, function (data) {
          console.log(data.name);
          console.log(data.photo);
          // Populate and create modal with html
          $("#teaModal").html("<h3>" + data.name + "</h3> <br> <img  src=" + data.photo + "height='50%' width='50%'><br>" );
          $("#chosenTea").modal("show");
      })

  });
});