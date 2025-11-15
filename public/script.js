const quotes = {
  happy: [
    "Hạnh phúc không phải là điều sẵn có. Nó đến từ hành động của bạn.",
    "Nụ cười là ngôn ngữ chung của hạnh phúc.",
    "Hãy sống như hôm nay là ngày tuyệt vời nhất!"
  ],
  sad: [
    "Buồn là một phần của cuộc sống, nhưng nó sẽ qua.",
    "Không sao cả khi bạn cảm thấy không ổn.",
    "Mỗi giọt nước mắt là một bước gần hơn đến sự chữa lành."
  ],
  neutral: [
    "Một ngày bình thường cũng là một ngày đáng quý.",
    "Không phải lúc nào cũng cần phải đặc biệt, đôi khi bình thường là đủ.",
    "Giữ cho tâm trí bình yên là một nghệ thuật."
  ],
  angry: [
    "Hít thở sâu, mọi chuyện rồi sẽ ổn.",
    "Giận dữ là ngọn lửa, hãy để nó nguội đi.",
    "Kiểm soát cảm xúc là sức mạnh thật sự."
  ]
};

function showQuote(mood) {
  const questionBox = document.getElementById("question-box");
  const quoteBox = document.getElementById("quote-box");
  const quoteText = document.getElementById("quote-text");

  const moodQuotes = quotes[mood];
  const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];

  questionBox.classList.add("fade-out");

  setTimeout(() => {
    questionBox.classList.add("hidden");
    quoteText.textContent = randomQuote;
    quoteText.classList.add("quote-animate");
    quoteBox.classList.remove("hidden");
  }, 800);
}