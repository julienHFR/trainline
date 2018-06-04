import { Map } from 'immutable';

const data = {
  servicesInput: [
    {
      serviceIdentifier: 'W13418',
      serviceOperator: 'SW',
      transportMode: 'TRAIN',
      scheduledInfo: { scheduledTime: '2018-06-03T21:57:00+01:00', scheduledPlatform: '4' },
      callingType: 'PickUp',
      destinationList: [{ crs: 'HMC' }],
      realTimeUpdatesInfo: {
        realTimeServiceInfo: {
          realTime: '2018-06-03T21:57:00+01:00',
          realTimePlatform: '4',
          realTimeFlag: 'Estimate',
        },
      },
      callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W13418/2018-06-03',
    },
    {
      serviceIdentifier: 'W12912',
      serviceOperator: 'SW',
      transportMode: 'TRAIN',
      scheduledInfo: {
        scheduledTime: '2018-06-03T22:00:00+01:00',
        scheduledPlatform: '2',
      },
      callingType: 'PickUp',
      destinationList: [{ crs: 'GLD' }],
      realTimeUpdatesInfo: {
        realTimeServiceInfo: {
          realTime: '2018-06-03T22:00:00+01:00',
          realTimePlatform: '2',
          realTimeFlag: 'Estimate',
        },
      },
      callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W12912/2018-06-03',
    },
  ],
  servicesOutput: Map({
    services: [
      {
        serviceIdentifier: 'W13418',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: { scheduledTime: '2018-06-03T21:57:00+01:00', scheduledPlatform: '4' },
        callingType: 'PickUp',
        destinationList: [{ crs: 'HMC' }],
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-06-03T21:57:00+01:00',
            realTimePlatform: '4',
            realTimeFlag: 'Estimate',
          },
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W13418/2018-06-03',
      },
      {
        serviceIdentifier: 'W12912',
        serviceOperator: 'SW',
        transportMode: 'TRAIN',
        scheduledInfo: {
          scheduledTime: '2018-06-03T22:00:00+01:00',
          scheduledPlatform: '2',
        },
        callingType: 'PickUp',
        destinationList: [{ crs: 'GLD' }],
        realTimeUpdatesInfo: {
          realTimeServiceInfo: {
            realTime: '2018-06-03T22:00:00+01:00',
            realTimePlatform: '2',
            realTimeFlag: 'Estimate',
          },
        },
        callingPatternUrl: 'https://realtime.thetrainline.com/callingPattern/W12912/2018-06-03',
      },
    ],
  }),
  callingsInput: {
    serviceUid: 'W10800',
    serviceOperator: 'SW',
    transportMode: 'TRAIN',
    serviceOrigins: ['WAT'],
    serviceDestinations: ['EXD'],
    stops: [
      {
        location: { crs: 'WAT' },
        arrival: { notApplicable: true },
        departure: {
          scheduled: {
            scheduledTime: '2018-06-03T19:15:00+01:00',
            scheduledPlatform: '9',
          },
          realTime: {
            realTimeServiceInfo: {
              hasDeparted: true,
              realTime: '2018-06-03T19:15:00+01:00',
              realTimePlatform: '9',
              realTimeFlag: 'Actual',
            },
          },
        },
        callingType: 'PickUp',
      },
      {
        location: { crs: 'CLJ' },
        arrival: {
          realTime: {
            realTimeServiceInfo: {
              hasArrived: true,
              realTime: '2018-06-03T19:21:00+01:00',
              realTimePlatform: '9',
              realTimeFlag: 'Actual',
            },
          },
        },
        departure: {
          scheduled: {
            scheduledTime: '2018-06-03T19:22:00+01:00',
            scheduledPlatform: '9',
          },
          realTime: {
            realTimeServiceInfo: {
              hasDeparted: true,
              realTime: '2018-06-03T19:23:00+01:00',
              realTimePlatform: '9',
              realTimeFlag: 'Actual',
            },
          },
        },
        callingType: 'PickUp',
      },
    ],
  },
  callingsOutput: Map({
    callings: {
      serviceUid: 'W10800',
      serviceOperator: 'SW',
      transportMode: 'TRAIN',
      serviceOrigins: ['WAT'],
      serviceDestinations: ['EXD'],
      stops: [
        {
          location: { crs: 'WAT' },
          arrival: { notApplicable: true },
          departure: {
            scheduled: {
              scheduledTime: '2018-06-03T19:15:00+01:00',
              scheduledPlatform: '9',
            },
            realTime: {
              realTimeServiceInfo: {
                hasDeparted: true,
                realTime: '2018-06-03T19:15:00+01:00',
                realTimePlatform: '9',
                realTimeFlag: 'Actual',
              },
            },
          },
          callingType: 'PickUp',
        },
        {
          location: { crs: 'CLJ' },
          arrival: {
            realTime: {
              realTimeServiceInfo: {
                hasArrived: true,
                realTime: '2018-06-03T19:21:00+01:00',
                realTimePlatform: '9',
                realTimeFlag: 'Actual',
              },
            },
          },
          departure: {
            scheduled: {
              scheduledTime: '2018-06-03T19:22:00+01:00',
              scheduledPlatform: '9',
            },
            realTime: {
              realTimeServiceInfo: {
                hasDeparted: true,
                realTime: '2018-06-03T19:23:00+01:00',
                realTimePlatform: '9',
                realTimeFlag: 'Actual',
              },
            },
          },
          callingType: 'PickUp',
        },
      ],
    },
    url: 'https://realtime.thetrainline.com/callingPattern/W10800/2018-06-03',
  }),
  errorInput: 'No callings received',
  errorOutput: Map({ error: 'No callings received' }),
};

export default data;
