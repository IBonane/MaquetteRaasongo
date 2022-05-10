$(document).ready(function(){
    let city = {};
    $('[id*=region_').mouseover(function(){
        $('[id*=region_').css('fill', '#33bbff');
        $(this).css('fill', '#ffbb33');

        city = {
            "sahel": "Dori",
            "nord": "Ouahigouya",
            "centre": "Ouagadougou",
            "centre_nord": "Kaya",
            "centre_est": "Tenkodogo",
            "centre_ouest": "Koudougou",
            "centre_sud": "Manga",
            "sud_ouest": "Gaoua",
            "est":"Fada N'gourma",
            "plateau_central": "Ziniaré",
            "boucle_mouhoun":"Dédougou",
            "hauts_bassins":"Bobo-Dioulasso",
            "cascade":"Banfora"
        }
        $("#regionName").text(city[$(this)[0].id.replace('region_','')]);
    });

    $("[id*=region_]").click(function(){
        // console.log($(this)[0].id);
        //recupere les regions
        allregion = $('[id*=region_');
        region = $(this);
        console.log(region);
        allregion.css('fill', '#33bbff');
        region.css('fill', '#ffbb33')
        regionId = region[0].id.replace('region_','');
        $(this).parents().attr({
            "xlink:href": "#"+city[regionId]
        });

        //regionId = region[0].id.replace('region_','');
        let underscore = true;
        do{
            regionId = regionId.replace('_', ' ');
            if(regionId.indexOf('_') == -1){
                underscore = false;
            }

        }while(underscore)
        // $("#regionName").text(regionId.toUpperCase());
    });  
        
});

/*ads of same category in show detail page ads*/
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
