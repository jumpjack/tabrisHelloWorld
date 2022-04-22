import {Button, TextView, contentView} from 'tabris';

var loadButton = new Button({
 text: "Cliccami"
}).onSelect(testme)
  .appendTo(contentView);

const textView = new TextView({
    font: '24px'
}).appendTo(contentView);

function testme() {
  console.log("ok");
  textView.text = "funziona";
}
