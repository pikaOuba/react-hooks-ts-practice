const ajax = (url: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case '/user':
          return {
            name: 'wk'
          };
        case '/books':
          return [
            'JavaScript',
            'React'
          ];
        case '/movies':
          return [
            '电影1',
            '电影2'
          ];
      }
    }, 3000);
  });
};