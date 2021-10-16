import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-new-project';
  abc = 'This is Ravi';
  res: any = "";
  ngOnInit() {
    console.log(this.title);
    this.getReverseSentence();
  }

  getReverseSentence() {
    var revSentence = "";
    var firstWord = this.abc.split(' ');
    console.log(firstWord);
    firstWord.forEach((element) => {
      console.log('element: ', element);
      var revWord = this.getReverseWordByFunction(element);
      console.log('Reverse word: ', revWord);

      revSentence = revSentence + " "+ revWord;
    });
    console.log('Reverse Sentence: ', revSentence);
  }

  getReverseWord(word) {
    this.res = '';
    console.log('word', [word]);
    console.log('word', word.length);
    for (var i = word.length-1; i < word.length; i--) {
      if (i >= 0) {
        this.res = this.res + word[i];
      }
      else {
        return this.res;
      }
    }
  }

  getReverseWordByFunction(word) {
    this.res = '';
    var newWord = [];
    for(var i=0; i< word.length; i++) {
      newWord.push(word[i]);
    }
    console.log(newWord);
    console.log('word', [word]);
    console.log('word', word.length);
    return newWord.reverse().join("");
  }
}
