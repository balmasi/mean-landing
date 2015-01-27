module.exports = function(parentId) {
  return{
  name: 'Spa and hot-tub installation or repair',
  route: 'spa-and-hot-tub-installation-and-repair',
  search_keywords: ['Spa' ,'hot', 'hot tub', 'hottub', 'hottub', 'spa installation', 'hot tub installation','spa repair'],
        parent:  parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 3,
        actor: 'Spa repair specialist',
        actor_plural: 'Spa repair specialists',
        action: 'help you Install and repair spa and hot-tub',
        questions:  [
        {
          field_type:"select",
          question:"What service do yo need from the specialists?",
          describtion:"Type of servcie",
          choices:[
            {
              label:"Install",
              value:"Install"
            },
            {
              label:"repair",
              value:"repair"
            },
            {
              label:"maintain",
              value:"maintain"
            },
            {
              label:"Remove",
              value:"Remove"

            },
            {
              label:"Other",
              value:"Other"
            }
          ]
        },
        {
          field_type:"select",
          question:"What kind of hot-tub or spa?",
          describtion:"Type of hot-tub or spa",
          choices:[
            {
              label:"Above-ground",
              value:"Above-ground"
            },
            {
              label:"In-ground",
              value:"In-ground"
            },
            
          ]
        },
        field_type:"select",
          question:"Location of hot-tub or spa?",
          describtion:"Location of hot-tub or spa",
          choices:[
            {
              label:"Indoor",
              value:"Indoor"
            },
            {
              label:"Outdoor",
              value:"Outdoor"
            },
            
          ]
        }
        ]

      };
    };
