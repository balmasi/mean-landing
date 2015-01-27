module.exports = function(parentId) {
  return {
    name: 'Interior Painting',
    route: 'interior-painting',
    search_keywords: [ 'interior painting', 'interior paint','Wall painting',' window painting', 'door painting'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'Painter',
    actor_plural: 'Painters',
    action: 'help complete your painting project',
    questions: [
      {
        field_type: 'checklist',
        question: 'What spaces do you need painted?',
        description: "Spaces to be painted",
        choices:[
          {
            label:"Whole interior",
            value:'Whole interior'
          },
          {
            label:'Master bedroom ',
            value:'Master bedroom'
          },
          {
            label:'Master bathroom',
            value:'Master bathroom'
          },
          {
            label:"bedroom",
            value:'bedroom'
          },
          {
            label:"Bathroom",
            value:'Bathroom'
          },
          {
            label:"Kitchen",
            value:'Kitchen'
          },
          {
            label:"Dining room",
            value:'Dining room'
          },
          {
            label:"Living room",
            value:'Living room'
          },
          {
            label:"Bathroom",
            value:'Bathroom'
          },
          {
            label:"Family room",
            value:'Family room'
          },
          {
            label:"Office",
            value:'Office'
          },
          {
            label:"Hallway",
            value:'Hallway'
          },
          {
            label:"Entry",
            value:'Entry'
          },
          {
            label:"Entry",
            value:'Entry'
          },
          {
            label:"closets",
            value:'closets'
          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'checklist',
        question: 'What surfaces do you need painted?',
        description: 'Surfaces that need painting',
        choices:[
          {

            label:'walls',
            value:'Walls'
          },

          {
            label:'Windows',
            value:'Windows'
          },
          {
            label:"Ceiling(s)",
            value:'Ceiling(s)'
          },
          {
            label:"Trim",
            value:'Trim'
          },
          {
            label:"Door(s)",
            value:'Door(s)'
          },
          {
            label:"Fence",
            value:'Fence'
          },
          {
            label:"Cabinetry or Woodwork",
            value:'Cabinetry or Woodwork'
          },
          {
            can_describe: true
          }
        ]
      },
      {
        field_type: 'select',
        question: 'What is the approximate square footage of the project?',
        description:"The approximate square footage of the project",
        choices:[
          {

            label: 'Less than 500',
            value: 'Less than 500'
          },

          {
            label: '500-1000',
            value: '500-1000'
          },
          {
            label: "1000-1500",
            value: '1000-1500'
          },
          {
            label: "1500-2000",
            value: '1500-2000'
          },
          {
            label: "2000-2500",
            value: '2000-2500'
          },
          {
            label: "2500-3000",
            value: '2500-3000'
          },
          {
            label: "Greater than 3000",
            value: 'Greater than 3000'
          },
          {
            label: "I am not sure",
            value: 'Customer is not sure and may need your help'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'Please describe the condition of your wall?',
        description:"Condition of walls",
        choices:[
          {
            label:'Excellent & smooth',
            value:'Excellent & smooth'
          },
          {
            label:'Fair',
            value:'Fair'
          },
          {
            label:"Minor holes & scratches",
            value:'Minor holes & scratches'
          },
          {
            label:"Poor",
            value:'Poor'
          },
          {
            label:"Major repair needed",
            value:'Major repair needed'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'Will you supply the paint?',
        description:"Who supplies the paint?",
        choices:[
          {
            label:'Yes',
            value:'Customer supplies paint'
          },

          {
            label:'No',
            value:'Professional supplies the paint'
          }
        ]
      },
      {
        field_type: 'select',
        question: 'Do you need furniture or wall hangings moved?',
        description:"Will furniture or wall hangings need to be moved?",
        choices:[
          {
            label:'Yes',
            value:'Yes'
          },
          {
            label:'No',
            value:'No'
          }
        ]
      }
    ]
  };
};