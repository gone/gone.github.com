var App = Em.Application.create();


Handlebars.registerHelper("section", function() {
    var firstLetter = this.text.substring(0,1);
    var rest = this.text.substring(1);
    return new Handlebars.SafeString("<span id='" + this.text.toLowerCase() + "'>" + firstLetter + "</span>" + rest)
})

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
