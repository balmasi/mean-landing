module.exports = function(parentId) {
  return{
  name: 'Wiring',
  route: 'wiring',
  search_keywords: ['wiring' ,'Home theater', 'Electrical wiring'],
        parent:  parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 3,
        actor: 'Electrician',
        actor_plural: 'Electricians',
        action: 'fix your electrical problems',
        questions:  [
        {
          field_type:"checklist",
          question:"What service do you need?",
          description:"Customer's reason for the request",
          choices:[
          {
            label:"Installation",
            value:"Installation"

          },
          {
            label:"Repair",
            value:"Repair"
          },
          {
            label:"Replacement",
            value:"Replacement"
          },
          {
            label:"Moving an electrical item to a new location",
            value:"Moving an electrical item to a new location"
          },
          {
            can_describe:true
          }
          ]

        },
        {
          field_type:"checklist",
          question:"What kind of wiring?",
          description:"Type of wiring",
          choices:[
          {
            label:"Electrical (outlet,switch,lighting, power)",
            value:"Electrical (outlet,switch,lighting, power)"

          },
          {
            label:"Communication (telephone,TV Cable, Network)",
            value:"Repair"
          },
          {
            label:"Home theater",
            value:"Home theater"
          },
          {
            label:"Audio speakers (distributed audio)",
            value:"Audio speakers (distributed audio)"
          },
          {
            label:"Security or CCTV",
            value:"Security or CCTV"
          },
          {
              label:"I am not sure",
              value:"Customer is not sure and needs your helps"
          },
          {
            can_describe:true
          }
          ]

        },
        {
          field_type:"select",
          question:"What type of property is it?",
          description:"Type of property",
          choices:[
          {
            label:"Residential",
            value:"Residential"
          },
          {
            label:"Commercial",
            value:"Commercial"
          }
          ]
        }
        ]
      };
    };