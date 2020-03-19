window.onload = function(){

    var currentMain; 
    var mainAnchor = document.querySelectorAll('.section-component');
    
    function mainAnchorHandler() { 
    
        mainAnchor.forEach( allAnchor => { 
            allAnchor.classList.add('off');
        })
    
        this.classList.replace('off','on');
        this.querySelector('.content-component').classList.remove('hidden');
        this.querySelector('.title-component .con').classList.remove('hidden');
        currentMain = this;            
    }
    
    mainAnchor.forEach( anchor => {
        anchor.addEventListener('click', mainAnchorHandler)
    })

    let currentTabLabel, currentTabPanel; 
    let tabComponent = document.querySelectorAll('.tab-component'); 


    function activate(elem){
        elem.classList.add('active'); 
        currentTabLabel = elem; 
    }

    function inactivate(elem){ 
        elem.classList.remove('active'); 
    }

    function activatePanel(elem){
        elem.classList.add('active'); 
        currentTabPanel = elem; 
    }
    
    function tabHandler(e) { 
        const targetElem = e.target; 
        const targetContain = targetElem.classList.contains('tab-label')

        if (targetContain) { 
            inactivate(currentTabLabel); 
            inactivate(currentTabPanel); 

            activate(targetElem);     
            
            let tabOffSetLeft = this.getBoundingClientRect().left.toFixed(2)

            this.querySelector('.bar').style.left = 
            targetElem.getBoundingClientRect().left.toFixed(2) - tabOffSetLeft +"px"; 
            
            console.log(tabOffSetLeft,targetElem.getBoundingClientRect().left.toFixed(2)); 

            let targetHref, targetPanel; 
            targetHref = targetElem.getAttribute('href')
            targetPanel = this.querySelector(targetHref); 
            
            activatePanel(targetPanel); 
        }       
    }

    tabComponent.forEach(items => { 
        let tabLabelFirst = items.querySelector('.tab-label-group .tab-label');
        let tabPanelFirst = items.querySelector('.tab-panel');
        activate(tabLabelFirst); 
        activatePanel(tabPanelFirst);

        let labelBar = document.createElement('div'); 
        labelBar.classList.add('bar');
        items.querySelector('.tab-label-group').appendChild(labelBar); 

        items.addEventListener('click', tabHandler); 
    })   

    let businessType = document.querySelectorAll('input[name="business-type"]')

    businessType.forEach( item => {
     
        item.addEventListener('click', function(e){
            if(this.checked) {
                document.querySelectorAll('section[data-input]').forEach(elem => elem.classList.add('hidden'));
                let inputId = this.getAttribute('id')
                document.querySelector('[data-input="'+inputId+'"').classList.remove('hidden'); 
            }
        })

    })

}
