document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;

    document.getElementById('wordcount').textContent = `Words: ${wordCount}`;

    document.getElementById('sentenceCount').textContent = `Sentences: ${sentenceCount}`;
});
