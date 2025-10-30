// Read More/Read Less functionality for publication abstracts
document.addEventListener('DOMContentLoaded', function() {
    const MAX_LENGTH = 200; // Maximum characters to show before truncating
    
    // Find all abstract containers
    const abstractContainers = document.querySelectorAll('.abstract-container');
    
    abstractContainers.forEach(container => {
        const abstractText = container.querySelector('.abstract-text');
        
        if (!abstractText) return;
        
        const fullText = abstractText.textContent.trim();
        
        // Only add read more functionality if text is longer than MAX_LENGTH
        if (fullText.length > MAX_LENGTH) {
            const truncatedText = fullText.substring(0, MAX_LENGTH) + '...';
            let isExpanded = false;
            
            // Set initial truncated text with inline button
            abstractText.innerHTML = truncatedText + ' <button class="btn btn-link btn-sm p-0 read-more-btn-inline" style="color: #d2691e; text-decoration: none; font-size: 0.875rem; border: none; background: none; padding: 0; margin: 0; display: inline; white-space: nowrap; cursor: pointer;">Read More</button>';
            
            // Add click event listener to the inline button
            const inlineBtn = abstractText.querySelector('.read-more-btn-inline');
            inlineBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                if (isExpanded) {
                    // Collapse
                    abstractText.innerHTML = truncatedText + ' <button class="btn btn-link btn-sm p-0 read-more-btn-inline" style="color: #d2691e; text-decoration: none; font-size: 0.875rem; border: none; background: none; padding: 0; margin: 0; display: inline; white-space: nowrap; cursor: pointer;">Read More</button>';
                    isExpanded = false;
                    // Re-add event listener to the new button
                    const newBtn = abstractText.querySelector('.read-more-btn-inline');
                    newBtn.addEventListener('click', arguments.callee);
                } else {
                    // Expand
                    abstractText.innerHTML = fullText + ' <button class="btn btn-link btn-sm p-0 read-more-btn-inline" style="color: #d2691e; text-decoration: none; font-size: 0.875rem; border: none; background: none; padding: 0; margin: 0; display: inline; white-space: nowrap; cursor: pointer;">Read Less</button>';
                    isExpanded = true;
                    // Re-add event listener to the new button
                    const newBtn = abstractText.querySelector('.read-more-btn-inline');
                    newBtn.addEventListener('click', arguments.callee);
                }
            });
        }
    });
});