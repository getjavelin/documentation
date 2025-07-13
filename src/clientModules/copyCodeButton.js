// Enhanced copy code button functionality
export default function copyCodeButton() {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be ready
    const addCopyButtonsToCodeBlocks = () => {
      const codeBlocks = document.querySelectorAll('pre code');
      
      codeBlocks.forEach((codeBlock) => {
        const pre = codeBlock.parentElement;
        
        // Skip if button already exists
        if (pre.querySelector('.copy-code-button')) {
          return;
        }
        
        const button = document.createElement('button');
        button.className = 'copy-code-button';
        button.innerHTML = '📋';
        button.title = 'Copy code';
        
        button.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(codeBlock.textContent);
            button.innerHTML = '✓';
            button.title = 'Copied!';
            
            setTimeout(() => {
              button.innerHTML = '📋';
              button.title = 'Copy code';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy code: ', err);
            button.innerHTML = '❌';
            button.title = 'Failed to copy';
            
            setTimeout(() => {
              button.innerHTML = '📋';
              button.title = 'Copy code';
            }, 2000);
          }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(button);
      });
    };
    
    // Add copy buttons when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', addCopyButtonsToCodeBlocks);
    } else {
      addCopyButtonsToCodeBlocks();
    }
    
    // Re-add copy buttons when navigating between pages
    const observer = new MutationObserver(() => {
      addCopyButtonsToCodeBlocks();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}
