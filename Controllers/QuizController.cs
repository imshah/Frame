using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Frame.Models;
using System.Web.Http.Description;

namespace Frame.Controllers
{
    [RoutePrefix("quiz")]
    public class QuizController : ApiController
    {
        // GET api/quiz
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        
        [HttpGet]
        [Route("questions")]
        [ResponseType(typeof(List<Quiz>))]
        public IHttpActionResult GetQuestions()
        {
            var questions = GetQuestionsForQuiz();
            return Ok(questions);
        }

        // GET api/quiz/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/quiz
        public void Post([FromBody]string value)
        {
        }

        // PUT api/quiz/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/quiz/5
        public void Delete(int id)
        {
        }

        public List<Quiz> GetQuestionsForQuiz()
        {
            var quizes = new List<Quiz>();
            var types = new List<QuestionType>();
            var answers = new List<Answer>();

            for (var i = 1; i < 5; i++)
            {
                var type = new QuestionType()
                {
                    CategoryId = i.ToString(),
                    Name = "catag" + i
                };
                types.Add(type);

                var answer = new Answer
                {
                    Statement = "option:" + i 
                };

                answers.Add(answer);
            }

            for(var i = 1; i <= 300; i++)
            {
                var newQuiz = new Quiz 
                { 
                    Question = "What is - " + i.ToString(),
                    CorrectAnswer = answers[i%4],
                    QuestionType = types[i % 4],
                    Answers = answers
                };

                quizes.Add(newQuiz);
            }

            return quizes;
        }
    }
}
