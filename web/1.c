#include<stdio.h>
#include<stdlib.h>

typedef struct PNode{
 float coef;
 int expn;
 struct PNode *next;
 
}PNode,*Polynomial;
void CreatePolyn(Polynomial P,int n);
void AddPolyn(Polynomial Pa,Polynomial Pb);
void display();
 int m=sizeof(PNode);
 PNode *Pa,*Pb,*head;
void CreatePolyn(PNode *P,int n)
{
 int i;
 PNode *pre,*s,*q;
 P=new PNode;
 head=P;
 P->next=NULL;
 for(i=1;i<=n;++i)
 {
  s=new PNode;
  scanf("%f %d",&s->coef,&s->expn);
  pre=P;
  q=P->next;
  while(q&&q->expn<s->expn)
  {
   pre=q;
   q=q->next;
  }
  s->next=q;
  pre->next=s;
  
 }
 
}
void AddPolyn(PNode *Pa,PNode *Pb)
{
 PNode *p1,*p2,*p3,*r;
 float sum;
 p1=Pa->next;
 p2=Pb->next;
 p3=Pa;

 while(p1&&p2)
 {
  if(p1->expn==p2->expn)
  {
   sum=p1->coef+p2->coef;
   if(sum!=0)
   {
    p1->coef=sum;
    p3->next=p1;p3=p1;
    p1=p1->next;
    r=p2;
    p2=p2->next;
    delete r;
   } 
  
   else
   {
    r=p1;p1=p1->next;delete r;
    r=p2;p2=p2->next;delete r;
   }
  }
  else if(p1->expn<p2->expn)
  {
   p3->next=p1;
   p3=p1;
   p1=p1->next;
  }
  else
  {
  p3->next=p2;
  p3=p2;
  p2=p2->next;
   
  }
 } 
p3->next=p1?p1:p2;
delete Pb;
display();
}
void display()
{
 PNode *d;
 head=d;
 while(d)
 {
  printf("%f的%d次方",d->coef,d->expn);
  d=d->next;
 }
}

int main()
{

 int n,m;
 printf("输入第一个多项式项数数:");
 scanf("%d",&n);
 CreatePolyn(Pa,n);
 printf("输入第二个多项式项数数:");
 scanf("%d",&m);
 CreatePolyn(Pb,m);
 AddPolyn(Pa,Pb);
 
 return 0;
 
}