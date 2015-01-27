module.exports = function(parentId) {
  return{
  name: 'Lamp Installation',
  route: 'lamp-installation',
  search_keywords: ['lamp' ,'lamp installation', 'outdoor lamp', 'outdoor lamp installation','la','lam'],
        parent: parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 2,
        actor: 'Electrician',
        actor_plural: 'Electricians',
        action: 'help you install lamps',
        questions:  [
        {
          field_type: "checklist",
          question: "What type of lamp(s) are you installing?",
          description: "Type of lamp(s)",
          choices: [
          {
            label:"Floor",
            value:"Floor"
          },
          {
            label:"Ceiling",
            value:"Ceiling"
          },
          {
            label:"Wall",
            value:"Wall"
          },
          {
            label:"Outdoor",
            value:"Outdoor"
          },
          {
            label:"Table",
            value:"Table"
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