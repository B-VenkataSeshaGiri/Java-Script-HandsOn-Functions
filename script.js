function repeat(n)
    {
        let factorial=1;
        // for(let i=1;i<=n;i++)
        // {
        //     factorial = factorial * i;
        // }
        let i=1;
        while(i<=n)
        {
            factorial = factorial * i;
            i++;
        }
        console.log(factorial);
    }
    repeat(5);