function scrapeNews() {
  const summaries = [];

  const headlines = document.querySelectorAll('<topstories>');
  const descriptions = document.querySelectorAll('<topstories>');

  for (let i = 0; i < headlines.length; i++) {
    const headline = headlines[i].innerText.trim();
    const description = descriptions[i].innerText.trim();

    // Summarize the news and add it to the summaries array
    // You can use external libraries or APIs for text summarization

    summaries.push({
      headline,
      description,
    });
  }

  return summaries;
}

chrome.runtime.sendMessage({ type: 'newsSummaries', summaries: scrapeNews() });
