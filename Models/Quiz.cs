using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Frame.Models;

namespace Frame.Models
{
    public class Quiz
    {
        public string Question { get; set; }
        public QuestionType QuestionType { get; set; }
        public List<Answer> Answers { get; set; }
        public Answer CorrectAnswer { get; set; }
    }
}