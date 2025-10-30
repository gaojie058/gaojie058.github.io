// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const citationCountElements = document.querySelectorAll('[data-google-scholar-id]');
    
    // Filter elements that have a valid Google Scholar ID
    const validElements = Array.from(citationCountElements).filter(element => {
        const id = element.getAttribute('data-google-scholar-id');
        return id && id.trim() !== '';
    });

    // Note: Google Scholar doesn't provide a public API for citation counts
    // This implementation shows a link to Google Scholar without the citation count
    validElements.forEach(element => {
        const id = element.getAttribute('data-google-scholar-id');
        if (id && id.trim() !== '') {
            element.innerHTML = `<a class="badge badge-pill badge-publication badge-info" href="https://scholar.google.com/citations?view_op=view_citation&hl=en&citation_for_view=${id}" target="_blank"><i class="ai ai-google-scholar"></i> Google Scholar</a>`;
        }
    });
});