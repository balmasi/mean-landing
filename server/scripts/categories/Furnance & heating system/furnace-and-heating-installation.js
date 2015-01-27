module.exports = function(parentId) {
  return{
  name: 'Furnace & Heating System Installation',
  route: 'furnace-and-heating-system-installation',
  search_keywords: ['furnace' ,'fur', 'heating', 'heating system','furnace installation', 'furnace replaceing', 'replacing', 'replacing furnace', 'replacing heating system','furn','furna','furnac','hea','heat'],
        parent:  parentId,
        travel_types: ['tocustomer'],
        scheduling_type: 'appointment',
        credits_required: 4,
        actor: 'furnace specialist',
        actor_plural: 'furnace specialists',
        action: 'help you install your furnace',
        questions:  [
        {
          field_type:"checklist",
          question:"What type of furnace do you want?",
          description:"Type of furnace customer wants",
          choices:[
          
          {
            label:"Modulating",
            value:"Modulating"
          },
          {
            label:"Single stage",
            value:"Single stage"
          },
          {
            label:"Dual",
            value:"Dual"
          },
          {
            label:"Varibale speed",
            value:"Varibale speed"
          },
          {
            label:"As recommended by the professional",
            value:"Customer wants your recommendation"
          },

          {
            can_describe:true
          }

          ]

        },
        {
            field_type:"select",
          question:"Does an existing furnace need to be removed?",
          description:"If the exisiting furnace needs to be removed or not",
          choices:[
          {
            label:"Yes",
            value:"Yes"
          },
          {
            label:"No",
            value:"No"
          },
         
          ]
        },
        {
                field_type:"select",
                question:"How many stories is your property?",
                description:"Number of stores in the property",
                choices:[
                {
                        label:"Single level,no basement",
                        value: "Single level, no basement"
                },
                {
                        label:"Single level, with basement",
                        value:"Single level, with basement"
                },
                {
                        label:"Two stores, no basement",
                        value:"Two stores, no basement"
                },
                {
                        label:"Two stores, with basement",
                        value:"Two stores, with basement"
                },
                
                ]
        },
         {
                field_type:"select",
                question:"What is the approximate squre footage of the area that needs cleaning?",
                description:"Approximate squre footage of the area that needs cleaning",
                choices:[
                {
                        label:"Less than 500",
                        value: "Less than 500"
                },
                {
                        label:"501 to 1000",
                        value:"501 to 1000"
                },
                {
                        label:"1001 to 1500",
                        value:"1501 to 2000"
                },
                {
                        label:"more than 2000",
                        value:"more than 2000"
                }
                ]
        },
        {
                field_type:"select",
                question: "What type of property do you have?",
                description: "Type of property",
                choices:[
                {
                        label:"Home",
                        value:"Home"
                },
                {
                        label:"Multi unit building",
                        value:"Multi unit building"
                },
                {
                        label:"Office/business",
                        value:"Office/business"
                },
                {
                        label:"Commercial",
                        value:"Commercial"
                },


                ]
        },
        ]
      };
    };