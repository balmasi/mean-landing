module.exports = function(parentId) {
  return {
    name: 'Toilet Repair or Installation',
    route: 'plumbing-toilet-repair-or-installation',
    search_keywords: [ 'toilet repair', 'toilet installation','plumber toilet work',' plumber toilet repair', 'plumber toilet installation','t','to','toi','toil','toile','toilet'],
    parent: parentId,
    travel_types: ['tocustomer'],
    scheduling_type: 'appointment',
    credits_required: 2,
    actor: 'plumber',
    actor_plural: 'plumbers',
    action: 'fix your toilet',
    questions: [
      {

        field_type:"checklist",
        question: "What toilet problem do you have?",
        description: "Type of problems",
        choices:[
          {
            label:"No Problem, Just need installation",
            value:"No problem just need installation"
          },
          {
            label:"Clogged",
            value:"Clogged"
          },
          {
            label:"Not flushing",
            value:"Not flushing"
          },
          {

            label:"Flushes slowly",
            value:"Flushes slowly"
          },
          {

            label:"Constant flushing",
            value:"Constant flushing"
          },
          {

            label:"Fills slowly",
            value:"Fills slowly"
          },
          {

            label:"Overflowing",
            value:"Overflowing"
          },
          {

            label:"Leaking from pipes",
            value:"Leaking from pipes"
          },
          {

            label:"Unpleasant odor",
            value:"Unpleasant odor"
          },
          {

            label:"Loose and wobbly toilet",
            value:"Loose and wobbly toilet"
          },
          {

            label:"Broken handle",
            value:"Broken handle"
          },
          {
            can_describe: true
          }



        ]
      },
      {
        field_type:"select",
        question: "How many toilets need work?",
        description: "Number of toilets that need work",
        choices:[
          {
            label:"One",
            value:"One"
          },
          {
            label:"Two",
            value:"Two"
          },
          {
            label:"Three",
            value:"Three"
          },
          {
            label:"More than three",
            value:"More than three"
          }
        ]
      },
      {
        field_type:"select",
        question: "Will you supply all the necessary parts and materials?",
        description: "Who provides materials?",
        choices:[
          {
            label:"Yes, I will provide the materials and parts",
            value:"Customer provides all the materials and parts"
          },
          {
            label:"Yes, but I need the professional advice",
            value:"The customer provides materials but may need your advice"
          },
          {
            label:"No",
            value:"Customer wants you to supply the parts and materials"
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
          }
        ]
      }
    ]
  };
};