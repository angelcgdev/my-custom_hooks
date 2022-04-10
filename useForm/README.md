# useForm Hook



Example of use:

```

    const [ { namecomponent }, handleInputChange , reset] = useForm({
        namecomponent: ''
    });


    //your componet

    <form onSubmit={ handleSubmit }>
        <input
            type='text'
            name='namecomponent'
            placeholder='add you input...'
            autoComplete='off'
            value={ namecomponent }
            onChange={ handleInputChange }
        />
        <div>
            <button
                type='submit'
            >
                add
            </button>
        </div>
    </form>

```

useForm displays the value, function to change the value and a function to reset,
your input name  
useForm() // get all the names of your inputs

