var App = Em.Application.create();

sections = [
    {text: "Projects"},
    {text: "Services"},
    {text: "Tools"},
]


App.MyView = Em.View.extend({
  mouseDown: function() {
    window.alert("hello world!");
  }
});


App.ButtonView = Em.View.extend({
    mouseDown: function(event){

    }
})

App.MainView = Em.View.create({
    templateName : "main",
    sections: sections,
})

App.MainView.appendTo("#housing");
