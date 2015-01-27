module.exports = function(parentId) {
  return {
    name: 'Moving',
    route: 'moving',
    search_keywords: ['Moving' ,'Mov', 'M', 'Moving out',"moving service","two guys one truck"],
    parent:  parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Mover',
    actor_plural: 'Movers',
    action: 'help you move',
    questions:  [
      {
        field_type:"select",
        question:"How far are you moving?",
        description:"Moving distance",
        choices:[
          {
            label:"Same building",
            value:"Same building"
          },
          {
            label:"Under 15 KM away",
            value:"Under 15 KM away "
          },
          {
            label: "15 to 30 KM away",
            value: "15 to 30 KM away "
          },
          {
            label:"More than 30 KM away",
            value:"More than 30 KM away "
          }
        ]
      },
      {
        field_type:"select",
        question:"What are you moving?",
        description:"What needs to be moved",
        choices:[
          {
            label:"Just a few items",
            value:"Just a few items"
          },
          {
            label:"Studio or one bedroom apartment",
            value:"Studio or one bedroom apartment"
          },
          {
            label:"2 or 3 bedroom apartment",
            value:"2 or 3 bedroom apartment"
          },
          {
            label:"2 or 3 bedroom house",
            value:"2 or 3 bedroom house"
          },
          {
            label:"3 or 4 bedroom house",
            value:"3 or 4 bedroom house"
          },
          {
            label:"More than 4 bedroom house",
            value:"More than 4 bedroom house"
          }
        ]
      },
      {
        field_type:"checklist",
        question:"What other services do you need?",
        description:"Other services needed",
        choices:[
          {
            label:"Packing",
            value:"Packing"
          },
          {
            label:"Furniture assembly and disassembly",
            value:"Furniture assembly and disassembly"
          },
          {
            label:"Move large items through stairs",
            value:"Move large items through stairs"
          },

          {
            can_describe:true
          }
        ]
      },
      {
        field_type:"select",
        question:"Are you providing the van or truck?",
        description:"Who provides van or truck",
        choices:[
          {
            label:"Yes, I will provide a van",
            value:"Customer will provide a van"
          },
          {
            label:"Yes, I will provide a box truck",
            value:"Customer will provide a box truck"
          },
          {
            label:"No, Mover should supply transportation",
            value:"Movers should supply transportation"
          }
        ]
      },
      {
        field_type:"select",
        question:"How many small/medium boxes/items need to be moved?",
        description:"Number of small and medium boxes or items to be moved",
        choices:[
          {
            label:"No small/medium item",
            value:"None"
          },
          {
            label:"1-10",
            value:"1-10"
          },
          {
            label:"10-20",
            value:"10-20"
          },
          {
            label:"20-50",
            value:"20-50"
          },
          {
            label:"50-80",
            value:"50-80"
          },
          {
            label:"More than 80",
            value:"More than 80"
          }
        ]
      },
      {
        field_type:"select",
        question:"How many large items to be moved?",
        description:"Number of items or items that need to be moved",
        choices:[
          {
            label:"No small/medium item",
            value:"0"
          },
          {
            label:"1-10",
            value:"1-10"
          },
          {
            label:"10-20",
            value:"10-20"
          },
          {
            label:"20-30",
            value:"20-30"
          },
          {
            label:"30-50",
            value:"30-50"
          },
          {
            label:"More than 50",
            value:"More than 50"
          }
        ]
      }
    ]
  };
};