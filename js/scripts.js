$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>hello!</li>");
    $("ul#webpage").prepend("<li>Well hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      (this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      (this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>goodbye!</li>");
    $("ul#webpage").prepend("<li>I said goodbye!</li>");
    $("ul#user").children("li").first().click(function() {
      (this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      (this).remove();
    })
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>stop copying me!</li>");
    $("ul#webpage").prepend("<li>Excuse me, I said stop copying me!</li>")
    $("ul#user").children("li").first().click(function() {
      (this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      (this).remove();
    });
  });
});
