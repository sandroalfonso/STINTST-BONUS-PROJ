import React from 'react'
import '../body/body.css'
import '../article/article.css'

const body = () => {
  return (
    <main className='layout'>
        <div className='col-sm-6 mb-3'>
            <div className='layout-blog'> {/*Whole Page Container*/}
                <div className='layout-vlog-vertical'>
                        <article className='article-container article-containter2'>
                            <h2 className='article-content title'>What is Linear Regression?</h2>
                            <div className='article-content article'>
                                <ul>
                                    <li>Prediction of the value of a (dependent) variable, based on the value of another existing (independent) variable</li>
                                    <li>One or more independent variables that can most accurately predict the value of the dependent variable are used to estimate the coefficients of the linear equation.</li>
                                        <ul>
                                            <li>Finds the specific variables that are significant for predicting the values of the dependent variable</li>
                                            <li>Determines how well does these independent variables impact the dependent variable</li>
                                        </ul>
                                </ul>

                                <br></br>
                                <ul>
                                    <li>We use a regression line which has an equation of the form <strong>y = mx + b</strong>, where <strong>X</strong> is the explanatory variable and <strong>Y</strong> is the dependent variable. The slope of the line is <strong>b</strong>, and <strong>a</strong> is the intercept (the value of <strong>y </strong>when <strong>x</strong> = 0).</li>
                                    <li>Linear regression fits a straight line or surface that minimizes the discrepancies between predicted and actual output values.</li>
                                </ul>

                                <div className='article-photo article-photo-2 wrapper'>
                                <img
                                    src="/graph.png"
                                    alt=''
                                    width={600}
                                />
                            </div>
                            </div>
                        </article>
                </div>
            </div>


            <div className='col-sm-6 mb-3'>
                <div className='layout-blog'>
                    <div className='layout-vlog-vertical'>
                        <article className='article-container article-containter2'>
                            <h2 className='article-content title'>Simple Linear Regression</h2>

                            <div className='article-content article'>
                                <ul>
                                    <li>Ex. Predicting the weight of other people having their height as the main basis for prediction</li>
                                    <li> We can plot the height of an individual through the years as the function for the body weight of that individual (dependent variable).</li>
                                    <li> We can see a linear relationship between the variables</li>
                                </ul>
                           
                            </div>

                            <div className='article-photo article-photo-2 wrapper'>
                                <img
                                    src="/SimpleLinearRegression.png"
                                    alt=''
                                />
                            </div>

                            <div className='article-content article'>
                                <p>Using the regression line equation <strong>y = mx + b, </strong>we can predict the weight of an individual given his/her height. </p>
    
                                <p>Ex. Height of Person A = 70 inches</p>
                                <p>To predict the weight of Person a, use the equation <strong>y = mx + b,</strong></p>
                                    <ul>
                                        <li>y = Weight of Person A</li>
                                        <li>m = Slope of the line</li>
                                        <li> x = Height of Person A</li>
                                        <li>b = Intercept (Value of <strong>y</strong> when <strong>x</strong> = 0)</li>
                                    </ul>
                    
                            </div>

                            <div className='article-content article'>
                                <p>From this example, we are examining how strong the relationship between one independent variable (height) and the dependent variable (weight).</p>
                                <p>If the only basis we can use for a linear regression for this example is height alone, we can easily conclude that the points would lie near the regression line. However, height is not the only factor/variable that affects the weight of an individual. Considering the other variables that really affects the weight of a person would result to the points in a regression line to be more scattered around the regression line.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <div className='col-sm-6 mb-3'>
                <div className='layout-blog'>
                    <div className='layout-vlog-vertical'>
                        <article className='article-container article-containter2'>
                            <h2 className='article-content title'>Multiple Linear Regression</h2>
                            <div className='article-content article'>
                            For scenarios where we need to predict a value of a dependent variable from 2 or more (independent) variables, we can apply the extension simple linear regression which is Multiple Linear regression
                            </div>

                            <div className='article-content article'>
                                <p>For the equation of the simple linear regression:</p>
                                    <p><strong>y = mx + b</strong></p>
                                <p>Which can also be used in linear regression as:</p>
                                    <p><strong>𝜃1𝑥1 + 𝜃0 = 𝑦</strong></p>
                                <p>For Multiple Linear Regression, we will use this formula instead:</p>
                                    <p><strong>𝜃1𝑥1 +𝜃2𝑥2 + 𝜃0 = 𝑦     or    h(x) = 𝜃1𝑥1 +𝜃2𝑥2 + 𝜃0 </strong></p>
                                <p>Or we can simply use:</p>

                                <div className='article-photo article-photo-2 wrapper'>
                                <img
                                    src="/formula.png"
                                    alt=''
                                />
                                </div>
                            </div>

                            <div className='article-content article'>
                                <p>Relating from the example with simple linear regression, for multiple linear regression, we can predict an individual’s body mass index (BMI). For predicting the BMI of a person we can do it such that, we can base our predictions about the eating habits of an individual in order to get their “diet score”. For the actual BMI of an individual weight and height is needed for its computation. </p>
                                <p><strong>BMI = weight / height2 x 703</strong></p>
                            </div>
                            
                            <div className='article-photo article-photo-2 wrapper'>
                                <img
                                    src="/DietScore1.png"
                                    alt=''
                                />
                            </div>

                            <div className='article-content article'>
                                Given the graph, it show the relationship between the computed diet score and the computed BMI. However, we can say that the “diet score” is not a good independent variable for predicting the BMI of an individual.
                            </div>

                            <div className='article-photo article-photo-2 wrapper img'>
                                <img
                                    src="/table.png"
                                    alt=''
                                    width={800}
                                />
                            </div>

                            <div className='article-content article'>
                                <p>However, we can consider other variables that could affect BMI, we can conclude that it helped show the true relationship between “diet score” and BMI. For this example, the dataset would most likely look like this.</p>
                                <p>Having this dataset, we can easily apply the multiple linear regression equation:</p>
                                <p><strong>h(x) = 𝜃1𝑥1 +𝜃2𝑥2 + 𝜃0 </strong></p>
                                <p>BMI = 18 + 1.5(diet score) + 1.6(male) + 4.2 (age > 20)</p>
                                    <ul>
                                        <li>𝜃0 (Intercept) = base value = 18.0</li>
                                        <li>𝜃x  = Slope for each variable</li>
                                    </ul>
                                
                            </div>

                            <div className='article-photo article-photo-2 wrapper'>
                                <img
                                    src="/DietScore3.png"
                                    alt=''
                                />
                            </div>

                            <div className='article-content article'>
                                <p>Given the previous observations, we can however consider the age and gender of the subjects in order to acquire the true relationship between the “diet score” and BMI.</p>
                                <p>Considering the age of the subjects, younger subjects and older subjects are clustered separately.</p>
                                <p>Looking at the gender on the other hand, females are found on the lower part of the plots and males on the upper part of each age cluster.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>

       
        
    </main>

    
  )
}

export default body