    var results = StudentPerformance.aggregate({
      $group: { _id : '$studentName',
                studentTotalScore: { $sum: '$studentScore'}},
      $match: {
        'courseCode': courseCode,
        'studentScore': 1
      // },
      // $orderby: {
      //   'count' : -1
      }
    });